var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.mapDS;
ds.discoverSchema('Building', {
  schema: 'history-map'
}, function(err,
  schema) {
  if (err) throw err;

  var json = JSON.stringify(schema, null, '  ');
  console.log(json);

  ds.disconnect();
});
