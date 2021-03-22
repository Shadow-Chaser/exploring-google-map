import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import API_KEY from './API_KEY.config'
const containerStyle = {
  width: '400px',
  height: '400px'
};

const location = {
  lat: 24.891964,
  lng: 91.872124
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript
    googleMapsApiKey={API_KEY}
    >
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={16}
    >
       <Marker
    onLoad={onLoad}
    position={location}
  />
    </GoogleMap>
  </LoadScript>
  )
}

export default React.memo(Map)