/* global use, db */
// MongoDB Playground

use('seneca_students');

// Delete a student record
const deleteResult = db
  .getCollection('student_records')
  .deleteOne({ student_id: 'S99999' });

console.log('Student record deleted:', deleteResult);

/*
OUTPUT:
 Student record deleted:
{ acknowledged: true, deletedCount: 1 }
*/
