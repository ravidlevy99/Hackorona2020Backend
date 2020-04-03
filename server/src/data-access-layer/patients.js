const Patient = require('../models/Patient.js').model;

async function insertPatients() {
    const patient1 = new Patient({
            name: "ce",
            id: "124",
            department: "g"
        });
    const patient2 = new Patient({
            name: "asdf",
            id: "124asdf",
            department: "asdf"
        });
    const patient3 = new Patient({
            name: "case",
            id: "12efa4",
            department: "asdf"
        });
    await Patient.create(patient1);
    await Patient.create(patient2);
    await Patient.create(patient3);
    return true;
}

async function insertPatient(name, id, department) {
    const patient = new Patient({
        name: name,
        id: id,
        department: department
    })
    return await Patient.create(patient);
}

async function findPatients() {
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
    insertPatient,
    insertPatients,
    patientsPerDepartment
}