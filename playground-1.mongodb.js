/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'ia';

// The current database to use.
use(database);


//db.usuariosGoogle.find().pretty()

db.usuariosGoogle.updateMany(
  {},
  {
    $set: {
      fechaNacimiento: "14/09/1997",  // Agrega la fecha de nacimiento
      estatura: 172,          // Agrega la estatura
      peso: 80               // Agrega el peso
    }
  }
);



/*const updateResult = await db.usuariosGoogle.updateMany(
  {},
  {
      $set: {
          fechaCreacion: new Date(),
          estadoAuditoria: 1
      }
  }
);

console.log(`Documentos actualizados: ${updateResult.modifiedCount}`);*/

// Create a new collection.
/*db.usuariosGoogle.insertOne({
  "id": "109662568995058929268",
  "email": "juanyumbato278@gmail.com",
  "verified_email": true,
  "name": "Juan Yumbato",
  "given_name": "Juan",
  "family_name": "Yumbato",
  "picture": "https://lh3.googleusercontent.com/a/ACg8ocIS0UyYpWW1_PkZOb5Vz8m4aau46MXFF3p8rPQwtXhKDwRUmw=s96-c"
})


db.usuariosGoogle.createIndex({ id: 1 }, { unique: true })*/



// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
