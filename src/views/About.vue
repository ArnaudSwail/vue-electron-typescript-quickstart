<template>
  <div id="container">
    <vl-map id="map" :load-tiles-while-animating="true" :load-tiles-while-interacting="true"
             data-projection="EPSG:4326" style="height: 400px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-geoloc @update:position="geolocPosition = $event">
        <template slot-scope="geoloc">
          <vl-feature v-if="geoloc.position" id="position-feature">
            <vl-geom-point :coordinates="geoloc.position"></vl-geom-point>
            <vl-style-box>
              <vl-style-icon src="_media/marker.png" :scale="0.4" :anchor="[0.5, 1]"></vl-style-icon>
            </vl-style-box>
          </vl-feature>
        </template>
      </vl-geoloc>

      <vl-layer-tile id="osm">
        <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
    </vl-map>

    <div style="padding: 20px">
      Zoom: {{ zoom }}<br>
      Center: {{ center }}<br>
      Rotation: {{ rotation }}<br>
      My geolocation: {{ geolocPosition }}
    </div>
  </div>
</template>

<script>
  import { SeaMap } from '../SeaMap';
  
  export default {
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