//CRUD operations
const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser:true, useUnifiedTopology:true}, (error,client) => {
  if(error){
    return console.log("unable to connect to database")
  }
  const db = client.db(databaseName)
})



















  /*
  db.collection('users').insertOne({
    name: 'Vinit',
    age: 21
  }, (error, result) => {
    if(error){
      return console.log('Unable to insert user')
    }
    console.log(result.ops)
  })
  db.collection('users').insertMany([{
    name: 'Sandas',
    age: 50
  }, {
    name: 'GG',
    age: 27
  }], (error, result) => {
    if(error){
      return console.log("Unable to insert")
    }
    console.log(result.ops)
  })
  const updatePromise = db.collection('users').updateOne({
    _id: new ObjectID("NFnefnfNKEF");
  }, {$set: {
    name: "Mike"
}}
})
  */
})
