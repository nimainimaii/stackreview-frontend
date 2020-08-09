const MongoClient = require('mongodb').MongoClient
const url = require('url')

// Create cached connection variable
let cachedDb = null

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
export async function connectToDatabase(uri) {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(url.parse(uri).pathname.substr(1))

  // Cache the database connection and return the connection
  cachedDb = db
  return db
}

export async function accessDatabase () {

  const db = await connectToDatabase(process.env.MONGO_URI)

  return db
}

export async function getReviewCollection () {
  const db = await accessDatabase()

  return await db.collection('review')
}
