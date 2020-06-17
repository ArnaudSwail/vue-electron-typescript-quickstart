<template>
  <div id="container">
    <div id="map" />
  </div>
</template>

<script>
  import 'ol/ol.css';
  import { OLMap } from '../OLMap';

  export default {
    mounted () {
      const map = new OLMap();
      map.init();
    },

    data () {
      return { 
        zoom: 2,
        center: [0, 0],
        rotation: 0,
        geolocPosition: undefined,
      }
    },
  }
</script>

<style>
html, body
{
  height: 100%;
  width: 100%;
}

body
{
  width: inherit;
  height:inherit;
  overflow-y: auto;
  padding: 0; margin: 0
}

div.fill
{
  width: 100%;
  height: 100%;
}

#map {
  position: absolute;
  bottom: 15%;
  top: 0;
  right: 0;
  left: 0;
}

.ol-attribution {
  padding: 3px;  position: absolute;  background-color:#ffffff;
  background-color:rgba(230,255,255,0.7);
  right: 3px;  bottom:5px;  font-size:12px;
}
.ol-attribution ul { padding: 0px;  line-height: 14px;  margin: 0px; }
.ol-attribution li { line-height: inherit;  display: inline;  list-style: none outside none; }

.ol-zoom .ol-zoom-out { margin-top: 202px; }
.ol-zoomslider { background-color: transparent; top: 2.3em; }
.ol-touch .ol-zoom .ol-zoom-out { margin-top: 212px; }
.ol-touch .ol-zoomslider { top: 2.75em; }
</style>