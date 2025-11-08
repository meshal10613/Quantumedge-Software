const jobsModel = require("../models/jobsModel");

exports.getJobs = async (req, res, next) => {
    try {
        const jobs = await jobsModel.findAll();
        res.json(jobs);
    } catch (err) {
        next(err);
    }
};

exports.createJob = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await jobsModel.insertJob(data);
        res.status(201).send(result);
    } catch (err) {
        next(err);
    }
};

exports.updateJob = async (req, res, next) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const result = await jobsModel.updateJobById(id, updatedData);
        res.send(result);
    } catch (err) {
        next(err);
    }
};

exports.deleteJob = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await jobsModel.deleteJobById(id);
        res.send(result);
    } catch (err) {
        next(err);
    }
};
