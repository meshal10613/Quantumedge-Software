require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { connectDB } = require("./config/db");

//* routes
const authRoutes = require("./routes/authRoutes");
const usersRoutes = require("./routes/usersRoutes");
const jobsRoutes = require("./routes/jobsRoutes");

//* models
const usersModel = require("./models/usersModel");
const jobsModel = require("./models/jobsModel");

const app = express();
const port = process.env.PORT || 3000;

// CORS origin list from env
const origins = (process.env.CORS_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

app.use(
    cors({
        origin: origins.length ? origins : ["http://localhost:5173"],
        credentials: true,
    })
);
app.use(express.json());
app.use(cookieParser());

//* mount routes
app.use("/auth", authRoutes);
app.use("/users", usersRoutes);
app.use("/jobs", jobsRoutes);

// generic error handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
});

async function start() {
    const db = await connectDB();
    // initialize models with collections
    usersModel.init(db.collection("users"));
    jobsModel.init(db.collection("jobs"));

    app.get("/", (req, res) => res.send("Server is running..."));

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}

start().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
});