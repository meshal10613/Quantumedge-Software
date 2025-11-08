const { ObjectId } = require("mongodb");

let jobsCollection = null;

function init (collection) {
	jobsCollection = collection;
};

function findAll () {
	return jobsCollection.findAll().toArray();
};

function insertJob (job) {
	return jobsCollection.insertOne(job);
};

function updateJobById (id, updatedData) {
	const query = { _id: new ObjectId(id) };
	const update = { $set: updatedData };
	return jobsCollection.updateOne(query, update);
};

function deleteJobById (id) {
	const query = { _id: new ObjectId(id) };
	return jobsCollection.deleteOne(query);
};

module.exports = { init, findAll, insertJob, updateJobById, deleteJobById };