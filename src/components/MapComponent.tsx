import * as React from 'react';
import ReactMapGL, {
  Marker, 
  AttributionControl, 
  FullscreenControl, 
  GeolocateControl, 
  NavigationControl, 
  Popup 
} from 'react-map-gl';
import pin from '../assets/pin.png'

function MapComponent() {
  return <ReactMapGL
    initialViewState={{
      latitude: 48.87,
      longitude: 2.3,
      zoom: 5.5
    }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    style={{
      height:"600px", 
      width: "100%",
    }}
    attributionControl={false}
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
  > 
    <GeolocateControl
      positionOptions={{enableHighAccuracy: true}}
      trackUserLocation={false}
    />
    <FullscreenControl />
    <Marker longitude={2.3} latitude={48.87} anchor="bottom" >
      <img style={{width:"24px", height:"24px",top:"-12px", bottom: "-12px"}} src={pin} alt="pin" />
    </Marker>
    <NavigationControl />
  </ReactMapGL>;
}

export default MapComponent
