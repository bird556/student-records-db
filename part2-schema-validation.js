/* global use, db */
// MongoDB Playground

use('seneca_students');

// Test with valid data
try {
  const validResult = db.getCollection('student_records').insertOne({
    student_id: 'S54321',
    name: 'Valid Student',
    email: 'valid.student@example.com',
    age: 22,
    courses: [{ course_name: 'Computer Science', grade: 'A' }],
    enrollment_date: new Date('2022-09-01T00:00:00Z'),
    status: 'active',
  });
  console.log('Valid insertion succeeded:', validResult);
} catch (err) {
  console.log('Valid insertion failed:', err.message);
}

// Test with invalid data
try {
  const invalidResult = db.getCollection('student_records').insertOne({
    student_id: 'S54322',
    name: 'Invalid Student',
    email: 'invalid-email',
    age: 17, // Invalid age
    enrollment_date: new Date(),
    status: 'unknown', // Invalid status
  });
  console.log('Invalid insertion succeeded:', invalidResult);
} catch (err) {
  console.log('Invalid insertion failed:', err.message);
}

/*
OUTPUT:
Valid insertion succeeded:
{
  acknowledged: true,
  insertedId: ObjectId('66bfccc7cfa4937bfeedc2d2')
}
Invalid insertion succeeded:
{
  acknowledged: true,
  insertedId: ObjectId('66bfccc7cfa4937bfeedc2d3')
}
*/
