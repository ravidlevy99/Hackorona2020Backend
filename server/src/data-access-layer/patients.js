const Patient = require('../models/Patient.js').model;

async function findPatients() {
    const patient = new Patient({
        name: "ce",
        id: "124",
        department: "g"
    })
    await Patient.create(patient);
    const patients = await Patient.find();
    return patients;
}

async function patientsPerDepartment() {
    const patientsPerDepartment = await Patient.aggregate([
        {"$group" : {_id:"$department", count:{$sum:1}}}
    ]);
    const output = [];
    for(let department of patientsPerDepartment) {
        output.push({name: department._id, count: department.count})
    }
    return output;
}

module.exports = {
    findPatients,
    patientsPerDepartment
}