var http = require ('http');             // For serving a basic web page.
var mongoose = require ("mongoose"); // The reason for this demo.

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://mongodb-codeart.cloudapp.net/HelloMongoose';

// The http server will listen to an appropriate port, or default to
// port 5000.
var theport = process.env.PORT || 5000;

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
  if (err) {
  console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
  console.log ('Succeeded connected to: ' + uristring);
  }
  var userSchema = new mongoose.Schema({
    name: {
  first: String,
  last: { type: String, trim: true }
    },
    age: { type: Number, min: 0}
  });
  var PUser = mongoose.model('PowerUsers', userSchema);var johndoe = new PUser ({
    name: { first: 'John', last: '  Doe   ' },
    age: 25
  });

  // Saving it to the database.
  johndoe.save(function (err) {
    if (err) {
      console.log('Error on save!');
    }
  });

  PUser.find({}).exec(function(err, result) {
    if (!err) {
      console.log(result);
    } else {
      console.log(err);
    }
  });
  
});
