/* global use, db */
// MongoDB Playground

use('seneca_students');

// Update the status of a student
const updateResult = db.getCollection('student_records').updateOne(
  { student_id: 'S99999' }, // Find the student by ID
  { $set: { status: 'graduated' } } // Update status to 'graduated'
);

console.log('Student status updated:', updateResult);

/*
OUTPUT:
Student status updated:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
*/
