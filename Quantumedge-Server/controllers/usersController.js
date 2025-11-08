const usersModel = require("../models/usersModel");

exports.getUsers = async (req, res, next) => {
    try {
        const users = await usersModel.findAll();
        res.send(users);
    } catch (error) {
        next(error);
    }
};

exports.register = async (req, res, next) => {
    try {
        const { email, lastSignInTime } = req.body;
        const result = await usersModel.insertUser(data);
        res.send(result);
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const { email, lastSignInTime } = req.body;
        const existUser = await usersModel.findByEmail(email);
        if (existUser) {
            const result = await usersModel.updateLastSignIn(
                email,
                lastSignInTime
            );
            return res.status(200).send(result);
        }
        const user = req.body;
        const result = await usersModel.insertUser(user);
        res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};