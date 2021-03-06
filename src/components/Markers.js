import React from 'react'
import { Marker } from 'react-leaflet';
import { IconLocation } from './IconLocation'

export default function Markers(props) {
    const { places } = props;

    const markers = places.map((place, i) => (
        <Marker 
            key={i}
            position={place.geometry} 
            icon={IconLocation} 
        />
    ));

    return markers;
}
