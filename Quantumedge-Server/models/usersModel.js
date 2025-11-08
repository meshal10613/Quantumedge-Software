let usersCollection = null;

function init (collection) {
	usersCollection = collection;
};

async function findAll () {
	return usersCollection.find().toArray();
};

async function findByEmail (email) {
	return usersCollection.findOne({ email });
};

async function insertUser (user) {
	return usersCollection.insertOne(user);
};

async function updateLastSignIn (email, lastSignInTime) {
	const query = { email };
	const update = {
		$set: {
			lastSignInTime
		}
	};
	return usersCollection.updateOne(query, update);
};

module.exports = { init, findAll, findByEmail, insertUser, updateLastSignIn };