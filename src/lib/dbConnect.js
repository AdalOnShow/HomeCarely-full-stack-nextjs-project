const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.NEXT_MONGODB_URI;
const dbName = process.env.NEXT_MONGODB_NAME;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = async (collectionName) => {
  try {
    const db = client.db(dbName);
    return db.collection(collectionName);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
