//var env = require('common-env')();
import env from 'common-env';

export var config = env().getOrElseAll({
    center: 
    {
        lon: -3,
        lat: 47.5
    },
    zoom:
    {
        initZoom: 11,
        MinZoom: 6,
        MaxZoom: 17
    },
    raster:
    {
        osm: {
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            label: 'OSM'
        }    
    }
  });
