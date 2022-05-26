import React from 'react';
import styled from 'styled-components';
import ReactMapGL, {
  Marker, 
  FullscreenControl, 
  GeolocateControl, 
  NavigationControl
} from 'react-map-gl';
import pin from '../../assets/pin.png'

function MapComponent() {
  return (
    <Wrapper>
      <ReactMapGL
        initialViewState={{ latitude: 48.87, longitude: 2.3, zoom: 5.5 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        style={{ height:"100%", width: "100%"}}
        attributionControl={false}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      > 
        <GeolocateControl
          positionOptions={{enableHighAccuracy: true}}
          trackUserLocation={false}
        />
        <FullscreenControl />
        <Marker longitude={2.3} latitude={48.87} anchor="bottom" >
          <img style={{width:"34px", height:"34px",top:"-17px", bottom: "-17px"}} src={pin} alt="pin" />
        </Marker>
        <NavigationControl visualizePitch={true}/>
      </ReactMapGL>
    </Wrapper>
  );
};

export default MapComponent

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  @media (max-width: 960px) {
    grid-column: 1/-1;

  }
  min-height: 400px;
`