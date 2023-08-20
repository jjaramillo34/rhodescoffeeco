// utils/db.js
import { MongoClient } from "mongodb";

let cachedDb = null;

export default async function connectToDatabase() {
  if (cachedDb) {
    return { db: cachedDb };
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  if (!client) {
    throw new Error("Failed to connect to database");
  } else {
    console.log("Connected to database");
  }

  const db = client.db(process.env.MONGODB_DB);

  cachedDb = db;
  return { db };
}
