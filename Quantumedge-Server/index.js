require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.port || 3000;
const app = express();

const uri = `mongodb+srv://${process.env.VITE_USERNAME}:${process.env.VITE_PASSWORD}@meshal10613.mbbtx0s.mongodb.net/?retryWrites=true&w=majority&appName=meshal10613`;

// middleware
app.use(cors());
app.use(express.json());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


    app.get('/', async(req, res) => {
        res.send('Server is running...');
    });

    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    const database = client.db(process.env.VITE_USERNAME);
    const usersCollection = database.collection("users");
    const jobsCollection = database.collection("jobs");

    // usersCollection

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});