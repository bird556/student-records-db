/* global use, db */
// MongoDB Playground

// Use the appropriate database
use('seneca_students');

// Create an index on student_id
db.getCollection('student_records').createIndex({ student_id: 1 });

// Create an index on email
db.getCollection('student_records').createIndex({ email: 1 });

// Create an index on enrollment_date
db.getCollection('student_records').createIndex({ enrollment_date: 1 });

// Verify the indexes
const indexes = db.getCollection('student_records').getIndexes();
console.log('Indexes created:', indexes);

/**
 OUTPUT:
 Indexes created:
[
  { v: 2, key: { _id: 1 }, name: '_id_' },
  { v: 2, key: { student_id: 1 }, name: 'student_id_1' },
  { v: 2, key: { email: 1 }, name: 'email_1' },
  { v: 2, key: { enrollment_date: 1 }, name: 'enrollment_date_1' }
]
 */
