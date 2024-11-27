import mongoose from 'mongoose';

let isConnected = false;  // Flag per evitare connessioni multiple

export default async function handler(req, res) {
  if (isConnected) {
    console.log("Already connected to the database");
    return res.status(200).json({ message: "Already connected" });
  }

  try {
    // Connessione al database
    await mongoose.connect('mongodb://localhost:27017/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('Connected to the database');
    return res.status(200).json({ message: "Connected to database" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Database connection failed" });
  }
}
