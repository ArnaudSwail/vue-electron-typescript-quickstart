import { Map } from 'ol';
import { Layer, Tile } from 'ol/layer';
import { XYZ } from 'ol/source';
import View from 'ol/View';
import { ZoomSlider, ScaleLine } from 'ol/control';
import { config } from './config';
import { transform } from 'ol/proj';

const wgs84 = 'EPSG:4326';
const pseudoMercator = 'EPSG:3857';

export class OLMap
{
    private map: Map | null = null;
    private view: View | null = null;
    private baseLayer: Layer | null = null;
    private osmSource: XYZ | null = null;

    constructor()
    {
        this.view = new View({
            projection: pseudoMercator,
            maxZoom: config.zoom.MaxZoom,
            minZoom: config.zoom.MinZoom
        });
        this.osmSource = new XYZ({ url: config.raster.osm.url, projection: pseudoMercator }); 
        this.baseLayer = new Tile({ source: this.osmSource });
        this.map = new Map({
            target: 'map',
            layers: [this.baseLayer],
            view: this.view,
        });
    }

    init()
    {
        this.map?.addControl( new ZoomSlider() );
        this.map?.addControl( new ScaleLine() );
        this.view?.setCenter( transform([config.center.lon, config.center.lat], wgs84, pseudoMercator ) );
        this.view?.setZoom( config.zoom.initZoom );    
    }
}