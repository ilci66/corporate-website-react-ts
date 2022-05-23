import React, { FC, useRef, useState, useEffect } from 'react'
// console.log(process.env.REACT_APP_API_KEY)
import { Wrapper, Status } from "@googlemaps/react-wrapper";



const Map: FC<{}> = () => {

  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();
  
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  return <div ref={ref} />


}

const MapWrapper = () => {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  return (
    <Wrapper apiKey={process.env.REACT_APP_API_KEY!} render={render}>
      <Map />
    </Wrapper>
  )
}
export default MapWrapper