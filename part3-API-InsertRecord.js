/* global use, db */
// MongoDB Playground

use('seneca_students');

// Insert a new student record
const newStudent = {
  student_id: 'S99999',
  name: 'Rashaun Bennett',
  email: 'rbennett17@myseneca.ca',
  age: 21,
  courses: [
    { course_name: 'Data Structures', grade: 'B+' },
    { course_name: 'DBS311', grade: 'A' },
    { course_name: 'OOP345', grade: 'A' },
    { course_name: 'WEB322', grade: 'A' },
  ],
  enrollment_date: new Date('2023-08-16T00:00:00Z'),
  status: 'active',
};

const result = db.getCollection('student_records').insertOne(newStudent);
console.log('New student added:', result);

/*
OUTPUT:
New student added:
{
  acknowledged: true,
  insertedId: ObjectId('66bfce6dd35dbcbd0ea2cf3b')
}

*/
