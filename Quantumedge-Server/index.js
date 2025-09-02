require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.port || 3000;
const app = express();

const uri = `mongodb+srv://${process.env.VITE_USERNAME}:${process.env.VITE_PASSWORD}@meshal10613.mbbtx0s.mongodb.net/?retryWrites=true&w=majority&appName=meshal10613`;

// middleware
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

const verifyToken = (req, res, next) => {
    const token = req?.cookies?.token;
    if(!token){
        return res.status(401).send({message: 'unauthorized access'});
    };
    // verify token
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN, (err, decoded) => {
        if(err){
            return res.status(401).send({message: 'unauthorized access'});
        };
        req.decoded = decoded;
        next();
    });
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// JSON token related apis
app.post("/jwt", async(req, res) => {
    const { email } = req.body;
    const user = { email };

    const token = jwt.sign(user, process.env.JWT_ACCESS_TOKEN, { expiresIn: '1h' }); 

    // set token in the cookies
    res.cookie('token', token, {
        httpOnly: true,
        secure: false,
        // sameSite: "None"
    });  

    res.send({message: 'success'});
});

app.get('/', async(req, res) => {
    res.send('Server is running...');
});

console.log("Pinged your deployment. You successfully connected to MongoDB!");
const database = client.db(process.env.VITE_USERNAME);
const usersCollection = database.collection("users");
const jobsCollection = database.collection("jobs");

// usersCollection
app.post("/auth/register", async(req, res) => {
    const data = req.body;
    const result = await usersCollection.insertOne(data);
    res.send(result);
});

app.post("/auth/login", async(req, res) => {
    const { email, lastSignInTime } = req.body;
    //check user already exist or not
    const existUser = await usersCollection.findOne({ email });
    if(existUser){
        const { lastSignInTime } = req.body;
        const query = { email };
        const updatedDoc = {
            $set: {
                lastSignInTime
            }
        };
        const result = await usersCollection.updateOne(query, updatedDoc);
        return res.status(200).send(result);
    };
    const user = req.body;
    const result = await usersCollection.insertOne(user);
    res.status(201).send(result);
});

// jobsCollection
app.get("/jobs", verifyToken, async(req, res) => {
    const result = await jobsCollection.find().toArray();
    res.send(result);
});

app.post("/jobs", verifyToken, async(req, res) => {
    const data = req.body;
    const result = await jobsCollection.insertOne(data);
    res.send(result);
});

app.put("/jobs/:id", verifyToken, async(req, res) => {
    const {id} = req.params;
    const data = req.body;
    const result = await jobsCollection.updateOne({ id: new ObjectId(id) })
});

app.delete("/jobs/:id", verifyToken, async(req, res) => {
    const { id } = req.params;
    const result = await jobsCollection.deleteOne(
        { id: new ObjectId(id) },
        { $set: updatedData }
    );
    res.send(result);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});