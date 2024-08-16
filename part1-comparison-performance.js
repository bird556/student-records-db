/* global use, db */
// MongoDB Playground

// Use the appropriate database
use('seneca_students');

// Query performance without indexes
const startNoIndex = new Date();
db.getCollection('student_records').find({ name: 'John Doe' }).toArray();
const endNoIndex = new Date();
const timeNoIndex = endNoIndex - startNoIndex;
console.log(`Query time without indexes: ${timeNoIndex}ms`);

// Create indexes on 'name', 'email', and 'enrollment_date'
db.getCollection('student_records').createIndex({ name: 1 });
db.getCollection('student_records').createIndex({ email: 1 });
db.getCollection('student_records').createIndex({ enrollment_date: 1 });

// Query performance with indexes
const startWithIndex = new Date();
db.getCollection('student_records').find({ name: 'John Doe' }).toArray();
const endWithIndex = new Date();
const timeWithIndex = endWithIndex - startWithIndex;
console.log(`Query time with indexes: ${timeWithIndex}ms`);

/*
OUTPUT:
Query time without indexes: 135ms
Query time with indexes: 24ms
*/
