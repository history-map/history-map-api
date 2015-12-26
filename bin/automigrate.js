var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mapDS;
ds.automigrate('Building', function(err) {
  if (err) throw err;

  var buildings = [{
    name: '蒋宅',
    location: {
      lat: 30.2491848649,
      lng: 120.1698133374
    },
    createdAt: new Date(),
    lastModifiedAt: new Date()
  }, {
    name: '约园',
    location: {
      lat: 30.2680607269,
      lng: 120.1499622205
    },
    createdAt: new Date(),
    lastModifiedAt: new Date()
  }, {
    name: '风波亭',
    location: {
      lat: 30.2599607269,
      lng: 120.1575852205
    },
    createdAt: new Date(),
    lastModifiedAt: new Date()
  }];
  var count = buildings.length;
  buildings.forEach(function(account) {
    app.models.Building.create(account, function(err, model) {
      if (err) throw err;

      console.log('Created:', model);

      count--;
      if (count === 0)
        ds.disconnect();
    });
  });
});
