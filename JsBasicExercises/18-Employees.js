function assignPersonalNumbers(employees) {
  let employeeList = {}; // Create an empty object to store employee names and personal numbers

  // Iterate through the employee names
  for (let name of employees) {
    employeeList[name] = name.length; // Store the name as a key and its length as the value
  }

  // Print each employee's name and personal number in the required format
  for (let name in employeeList) {
    console.log(`Name: ${name} -- Personal Number: ${employeeList[name]}`);
  }
}

// Example input
let employees = [
  'Silas Butler',
  'Adnaan Buckley',
  'Juan Peterson',
  'Brendan Villarreal',
];
assignPersonalNumbers(employees);
