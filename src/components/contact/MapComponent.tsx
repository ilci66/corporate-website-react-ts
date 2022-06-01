import React from 'react';
import styled from 'styled-components';
import ReactMapGL, {
  Marker, 
  FullscreenControl, 
  GeolocateControl, 
  NavigationControl
} from 'react-map-gl';
import pin from '../../assets/pin.png'
import mapboxgl from 'mapbox-gl';
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

const MapComponent = () => {
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
          <img style={{width:"21px", height:"14px",top:"-11px", bottom: "-7px"}} src={pin} alt="pin" />
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