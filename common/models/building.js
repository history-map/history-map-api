var loopback = require('loopback');

module.exports = function(Building) {
  Building.nearby = function(lat, lng, cb) {
    var here = new loopback.GeoPoint({
      lat: lat,
      lng: lng
    });

    Building.find({
      where: {
        location: {
          near: here
        }
      },
      limit: 10
    }, function(err, nearbyBuildings) {
      console.info(nearbyBuildings);
      cb(null, nearbyBuildings);
    });
  };

  Building.remoteMethod(
    'nearby', {
      http: {
        path: '/nearby',
        verb: 'get'
      },
      accepts: [{
        arg: 'lat',
        type: 'string'
      }, {
        arg: 'lng',
        type: 'string'
      }],
      returns: {
        arg: 'buildings',
        type: 'array'
      }
    }
  );
};
