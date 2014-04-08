exports.default = {
  mongo: function(api) {
    return {
      fake: false,
      host: 'mongodb-codeart.cloudapp.net',
      port: 27017,
      username: 'codeart',
      password: 'codeart',
      options: null,
      database: 'TableTop'
    };
  }
};

exports.test = {
  mongo: function(api) {
    var toFakeMongo = false;
    if(process.env.fakemongo == 'true'){
      toFakeMongo = true;
    }

    return {
      'fake': toFakeMongo,
      'host': '127.0.0.1',
      'port': 27017,
      'username': 'codeart',
      'password': 'codeart',
      'options': null,
      'DB': 'TableTop'
    };
  }
};
