import React from "react";
import features from "../features.json";
import {
    ComposableMap,
    Geographies,
    Geography,
    Annotation,
} from "react-simple-maps";

const MapChart = () => {
    return (
        <ComposableMap
            projection="geoAzimuthalEqualArea"
            projectionConfig={{
                rotate: [-27, -44, 0],
                center: [-5, -3],
                scale: 2000
            }}
        >
            <Geographies
                geography={features}
                fill="#D6D6DA"
                stroke="#FFFFFF"
                strokeWidth={0.5}
            >
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} />
                    ))
                }
            </Geographies>
            <Annotation
                subject={[20.000, 44.8566]}
                dx={-90}
                dy={-30}
                connectorProps={{
                    stroke: "#FF5533",
                    strokeWidth: 3,
                    strokeLinecap: "round"
                }}
            >
                <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
                    {"Srbija"}
                </text>
            </Annotation>
        </ComposableMap>
    );
};

export default MapChart;
