/* global use, db */
// MongoDB Playground

use('seneca_students');

// Finding all active students
const activeStudents = db
  .getCollection('student_records')
  .find({ status: 'active' })
  .toArray();
console.log('Active students:', activeStudents);

/*
OUTPUT:
Active students:
[
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93a4'),
    student_id: 'S87013',
    name: 'Melinda Gibbs',
    email: 'amandaterry@yahoo.com',
    age: 22,
    courses: [ [Object], [Object], [Object], [Object], [Object] ],
    enrollment_date: '2022-10-03',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93a5'),
    student_id: 'S43209',
    name: 'Tracy Alexander',
    email: 'andreasimon@hotmail.com',
    age: 24,
    courses: [ [Object], [Object] ],
    enrollment_date: '2020-04-27',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93a8'),
    student_id: 'S35087',
    name: 'Logan Young',
    email: 'joseallen@hotmail.com',
    age: 30,
    courses: [ [Object], [Object], [Object], [Object], [Object] ],
    enrollment_date: '2021-10-17',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93af'),
    student_id: 'S28240',
    name: 'Patricia Walter',
    email: 'sylviagray@gmail.com',
    age: 28,
    courses: [ [Object], [Object], [Object], [Object] ],
    enrollment_date: '2020-05-18',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93b0'),
    student_id: 'S03009',
    name: 'Crystal King',
    email: 'christinebarnes@yahoo.com',
    age: 25,
    courses: [ [Object] ],
    enrollment_date: '2021-01-10',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93b1'),
    student_id: 'S35038',
    name: 'Michelle Huynh',
    email: 'stephaniebarker@yahoo.com',
    age: 29,
    courses: [ [Object], [Object] ],
    enrollment_date: '2022-12-08',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93b2'),
    student_id: 'S54324',
    name: 'Denise Nunez',
    email: 'ccosta@romero.com',
    age: 30,
    courses: [ [Object], [Object], [Object], [Object] ],
    enrollment_date: '2021-01-04',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93b5'),
    student_id: 'S23215',
    name: 'Jessica Edwards',
    email: 'derekbonilla@hotmail.com',
    age: 25,
    courses: [ [Object], [Object], [Object], [Object] ],
    enrollment_date: '2022-12-26',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93b6'),
    student_id: 'S18737',
    name: 'Dale Buck',
    email: 'eric53@gmail.com',
    age: 21,
    courses: [ [Object], [Object], [Object] ],
    enrollment_date: '2024-03-02',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93ba'),
    student_id: 'S89042',
    name: 'Dana Perez',
    email: 'anitahoover@hotmail.com',
    age: 30,
    courses: [ [Object], [Object], [Object] ],
    enrollment_date: '2021-09-30',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93bc'),
    student_id: 'S65240',
    name: 'Jason Jones',
    email: 'qsmith@hotmail.com',
    age: 28,
    courses: [ [Object], [Object] ],
    enrollment_date: '2022-04-22',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93c2'),
    student_id: 'S37555',
    name: 'Brett Coleman',
    email: 'ljackson@yahoo.com',
    age: 27,
    courses: [ [Object], [Object] ],
    enrollment_date: '2023-10-20',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93c4'),
    student_id: 'S17333',
    name: 'Elizabeth Richardson',
    email: 'jennifer30@gmail.com',
    age: 18,
    courses: [ [Object] ],
    enrollment_date: '2021-07-09',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93c6'),
    student_id: 'S47331',
    name: 'Christopher Brown',
    email: 'sherry60@hunter.biz',
    age: 21,
    courses: [ [Object], [Object], [Object] ],
    enrollment_date: '2022-12-02',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93cc'),
    student_id: 'S90745',
    name: 'Daniel Kramer',
    email: 'amurphy@yahoo.com',
    age: 26,
    courses: [ [Object] ],
    enrollment_date: '2022-09-02',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93ce'),
    student_id: 'S17116',
    name: 'Samantha Gonzalez',
    email: 'rodriguezmichael@yahoo.com',
    age: 20,
    courses: [ [Object], [Object], [Object], [Object], [Object] ],
    enrollment_date: '2023-04-15',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93d2'),
    student_id: 'S75745',
    name: 'Jared Boyd',
    email: 'kristinlove@white.com',
    age: 24,
    courses: [ [Object], [Object], [Object] ],
    enrollment_date: '2024-01-28',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93d6'),
    student_id: 'S60313',
    name: 'Tina Diaz',
    email: 'ugentry@martin-alvarado.com',
    age: 29,
    courses: [ [Object], [Object] ],
    enrollment_date: '2023-09-15',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93d9'),
    student_id: 'S21940',
    name: 'Christopher Gonzalez',
    email: 'stephanietorres@hotmail.com',
    age: 20,
    courses: [ [Object], [Object], [Object], [Object] ],
    enrollment_date: '2021-03-19',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93da'),
    student_id: 'S55250',
    name: 'Cindy Ellis',
    email: 'jordanstafford@gmail.com',
    age: 24,
    courses: [ [Object], [Object] ],
    enrollment_date: '2023-12-14',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93dd'),
    student_id: 'S54643',
    name: 'Jennifer Martin',
    email: 'uhoward@buck.com',
    age: 20,
    courses: [ [Object], [Object], [Object], [Object] ],
    enrollment_date: '2024-01-24',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93df'),
    student_id: 'S08767',
    name: 'Danielle Hanson',
    email: 'keithkaren@scott.net',
    age: 27,
    courses: [ [Object], [Object] ],
    enrollment_date: '2021-03-21',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93e0'),
    student_id: 'S02009',
    name: 'William Allen',
    email: 'melaniesmith@yahoo.com',
    age: 26,
    courses: [ [Object] ],
    enrollment_date: '2024-06-07',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93e4'),
    student_id: 'S43954',
    name: 'Gary White',
    email: 'hwhite@yahoo.com',
    age: 23,
    courses: [ [Object], [Object], [Object], [Object], [Object] ],
    enrollment_date: '2024-02-14',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93e6'),
    student_id: 'S13321',
    name: 'Jennifer Bowman',
    email: 'brettdavis@hotmail.com',
    age: 26,
    courses: [ [Object], [Object], [Object], [Object], [Object] ],
    enrollment_date: '2022-04-17',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93e7'),
    student_id: 'S27394',
    name: 'Christine Williams',
    email: 'lwhite@henson.com',
    age: 20,
    courses: [ [Object], [Object], [Object], [Object], [Object] ],
    enrollment_date: '2022-08-15',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93ed'),
    student_id: 'S85924',
    name: 'Joanne Alvarez',
    email: 'jonathan62@johnson-hess.com',
    age: 28,
    courses: [ [Object] ],
    enrollment_date: '2024-04-08',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93ef'),
    student_id: 'S38783',
    name: 'Andre Rogers',
    email: 'patelcrystal@gmail.com',
    age: 25,
    courses: [ [Object] ],
    enrollment_date: '2021-02-02',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93f0'),
    student_id: 'S27124',
    name: 'Timothy Sanders',
    email: 'brianwhitney@bradford.com',
    age: 28,
    courses: [ [Object] ],
    enrollment_date: '2023-07-11',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93f2'),
    student_id: 'S00485',
    name: 'Tammy Olsen',
    email: 'jennifer00@stevenson.com',
    age: 20,
    courses: [ [Object], [Object], [Object] ],
    enrollment_date: '2021-10-10',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93f4'),
    student_id: 'S01943',
    name: 'Sean Smith',
    email: 'laurieferguson@yahoo.com',
    age: 22,
    courses: [ [Object], [Object], [Object], [Object], [Object] ],
    enrollment_date: '2020-02-05',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93f5'),
    student_id: 'S84925',
    name: 'Thomas Burton',
    email: 'acurtis@smith.com',
    age: 30,
    courses: [ [Object], [Object], [Object], [Object], [Object] ],
    enrollment_date: '2022-04-06',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a93ff'),
    student_id: 'S53822',
    name: 'Natalie Ross',
    email: 'cherrystephen@hotmail.com',
    age: 26,
    courses: [ [Object], [Object] ],
    enrollment_date: '2022-02-11',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a9401'),
    student_id: 'S66855',
    name: 'Michael Anderson',
    email: 'emorales@hotmail.com',
    age: 27,
    courses: [ [Object], [Object], [Object], [Object] ],
    enrollment_date: '2021-04-27',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a9402'),
    student_id: 'S59662',
    name: 'Matthew Dennis',
    email: 'joshuaray@gmail.com',
    age: 29,
    courses: [ [Object], [Object], [Object] ],
    enrollment_date: '2020-03-01',
    status: 'active'
  },
  {
    _id: ObjectId('66bfc4a112f6a30ab36a9405'),
    student_id: 'S42207',
    name: 'Bryce White',
    email: 'amanda26@franklin.info',
    age: 29,
    courses: [ [Object], [Object], [Object] ],
    enrollment_date: '2020-04-26',
    status: 'active'
  },
  {
    _id: ObjectId('66bfccc7cfa4937bfeedc2d2'),
    student_id: 'S54321',
    name: 'Valid Student',
    email: 'valid.student@example.com',
    age: 22,
    courses: [ [Object] ],
    enrollment_date: 2022-09-01T00:00:00.000Z,
    status: 'active'
  }
]

*/
