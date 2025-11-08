const jwt = require("jsonwebtoken");

const createTokenAndSetCookie = (res, payload) => {
	const token = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, { expiresIn: "1h" });
	// Note: secure: true + sameSite: "None" requires HTTPS. For local dev you may want secure:false.
	res.cookie('token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production', // false in dev
		sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax'
	});
};

exports.createJwt = async(req, res) => {
	const { email } = req.body;
	if (!email) {
		return res.status(400).json({ message: 'email required' });
	};
	createTokenAndSetCookie(res, { email });
	res.json({ message: "success" });
};