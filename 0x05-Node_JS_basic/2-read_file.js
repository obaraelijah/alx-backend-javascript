const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter(line => line.trim() !== ''); // Remove empty lines

    const fields = {};
    for (const line of lines) {
      const [firstname, lastname, field] = line.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      if (firstname !== 'firstname' && lastname !== 'lastname' && field !== 'field') {
        fields[field].push(firstname);
      }
    }

    const totalStudents = Object.values(fields).reduce((total, field) => total + field.length, 0);

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, students] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

