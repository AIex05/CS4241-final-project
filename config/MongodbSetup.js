const { MongoClient, ServerApiVersion } = require('mongodb');
const keys = require('./keys');
const uri = `mongodb+srv://${keys.Database.Cluster}:${keys.Database.Pass}@${keys.Database.Cluster}.hoeao6p.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

module.exports = client;