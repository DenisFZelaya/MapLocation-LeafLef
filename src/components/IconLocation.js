import React from 'react'
import L from 'leaflet';

export const IconLocation = L.icon({
    iconUrl: require('../img/icon.svg'),
    iconRetinaUrl: require('../img/icon.svg'),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35,35],
    className: "leaflet-venue-icon",
});

