const express = require("express");
const router = express.Router();
const jobsControl = require("../controllers/jobsController");
const verifyToken = require("../middlewares/verifyToken");

router.get("/", jobsControl.getJobs);
router.post("/", verifyToken, jobsControl.createJob);
router.put("/:id", verifyToken, jobsControl.updateJob);
router.delete("/:id", verifyToken, jobsControl.deleteJob);

module.exports = router;