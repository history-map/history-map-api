var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mapDS;
ds.discoverAndBuildModels('Building', {
    schema: 'history-map'
  },
  function(err, models) {
    if (err) throw err;

    models.Building.find(function(err, buildings) {
      if (err) throw err;

      console.log('Found:', buildings);

      ds.disconnect();
    });
  });
