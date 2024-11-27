import connectDatabase from './database';
import MyModel from '../models/user';  // Supponiamo tu abbia un modello Mongoose

export default async function handler(req, res) {
  await connectDatabase();  // Assicurati che il DB sia connesso

  try {
    const data = await MyModel.find();  // Recupera i dati dal database
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
