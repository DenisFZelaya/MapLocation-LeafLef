import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Markers from './Markers';
import {Places} from './data.json';
import {useLocation, useHistory} from 'react-router-dom'

const MapView = () => {

    const [state, setstate] = useState({
        currentLocation: {lat: '13.827172617588243', lng: '-87.4665462412378'},
        zoom: 13
    })

    const location = useLocation();
    const history = useHistory();


    useEffect(() => {
        if(location.latitude && location.longitude) {
            const currentLocation = {
                lat: location.state.latitude,
                lng: location.state.longitude
            }

            setstate({...state, currentLocation})

            history.replace({pathname: "/map", state: {}})
        }
    }, [])

    return (
        <MapContainer center={state.currentLocation} zoom={state.zoom}>
        <TileLayer 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers  places={Places}/>
        </MapContainer>
    )
}

export default MapView;