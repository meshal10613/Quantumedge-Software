//? If use prisma then------------------>
const prisma = require("../config/prisma");

async function getJobs() {
    return prisma.job.findMany();
}

async function createJob(data) {
    return prisma.job.create({ data });
}

async function updateJob(id, data) {
    return prisma.job.update({
        where: { id },
        data,
    });
}

async function deleteJob(id) {
    return prisma.job.delete({
        where: { id },
    });
}

module.exports = { getJobs, createJob, updateJob, deleteJob };