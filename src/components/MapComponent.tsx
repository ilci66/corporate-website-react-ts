import * as React from 'react';
import Map from 'react-map-gl';
import styled from 'styled-components';

function MapComponent() {
  return <StyledMap
    initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
    mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
  />;
}

export default MapComponent


const StyledMap = styled(Map)`
  width: 100%;
  min-height: 500px;

`