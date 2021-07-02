const employee = {
    name: 'Ian McManus',
    streetAddress: {
        number: '10475',
        street: 'Gandy Blvd N',
        unit: 'Unit 3315',
        city: 'St. Petersburg',
        state: 'FL',
        zipCode: '33702'
    }
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}

//console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'));