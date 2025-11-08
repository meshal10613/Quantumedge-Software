//? If use prisma then------------------>
const { prisma } = require("../config/prisma");

async function getUser() {
    return prisma.user.findMany();
}

async function registerUser(data) {
    const exist = await prisma.user.findUnique({
        where: { email: data.email },
    });
    if (exist) {
        throw new Error("Email already registerd! Please login...");
    }
    return prisma.user.create({
        data,
    });
}

async function loginUser(data) {
    const exist = await prisma.user.findUnique({
        where: { email: data.email },
    });
    if (exist) {
        return prisma.user.update({
            where: { email: data.email },
            data: { lastSignInTime: data.lastSignInTime },
        });
    }
    return new Error("Email didn't registerd yet! Please register...");
}

module.export = { getUser, registerUser, loginUser };