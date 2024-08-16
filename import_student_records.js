const { MongoClient } = require('mongodb');
const fs = require('fs');
require('dotenv').config();

// MongoDB connection URL (Replace <username>, <password>, and <cluster-url> with your details)
const url = `mongodb+srv://${process.env.name}:${process.env.password}@senecaweb.efxnfid.mongodb.net/?retryWrites=true&w=majority&appName=SenecaWeb`;

// Name of your database
const dbName = 'seneca_students';

// Path to your JSON file
const filePath = './student_records.json'; // Ensure this path is correct

async function importData() {
  // Connect to MongoDB
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB server');

    const db = client.db(dbName);
    const collection = db.collection('student_records');

    // Read the JSON file
    const fileData = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileData);

    // Insert the data into the collection
    const result = await collection.insertMany(jsonData);
    console.log(`${result.insertedCount} records successfully inserted!`);
  } catch (err) {
    console.error('Error importing data:', err);
  } finally {
    await client.close();
  }
}

importData();
