import { Style, Fill, Stroke } from 'ol/style.js'
import CircleStyle from 'ol/style/Circle.js'
import GeometryType from 'ol/geom/GeometryType.js'

export function createEditingStyle () {
    const styles = {};
    const white = [255, 255, 255, 1];
    const blue = [25, 25, 25, 0.9];
    const width = 3;
    
    styles[GeometryType.POLYGON] = [
        new Style({
            fill: new Fill({
                color: [200, 200, 200, 0.3],
            }),
        }),
    ];
    styles[GeometryType.MULTI_POLYGON] = styles[GeometryType.POLYGON];

    styles[GeometryType.LINE_STRING] = [
        new Style({
            stroke: new Stroke({
                color: white,
                width: width + 2,
            }),
        }),
        new Style({
            stroke: new Stroke({
                color: blue,
                width: width,
                lineDash: [.1, 5]
            }),
        }),
    ];
    styles[GeometryType.MULTI_LINE_STRING] = styles[GeometryType.LINE_STRING];

    styles[GeometryType.CIRCLE] = styles[GeometryType.POLYGON].concat(
        styles[GeometryType.LINE_STRING]
    );

    styles[GeometryType.POINT] = [
        new Style({
            image: new CircleStyle({
                radius: width * 2,
                    fill: new Fill({
                    color: blue,
                }),
                stroke: new Stroke({
                    color: white,
                    width: width / 2
                }),
            }),
            zIndex: Infinity,
        }),
    ];
    styles[GeometryType.MULTI_POINT] = styles[GeometryType.POINT];

    styles[GeometryType.GEOMETRY_COLLECTION] = styles[
        GeometryType.POLYGON
    ].concat(styles[GeometryType.LINE_STRING], styles[GeometryType.POINT]);

    return styles;
}