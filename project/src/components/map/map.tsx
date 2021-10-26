import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef} from 'react';

function Map ({city}) {
  const mapRef = useRef(null);

  return (
    <section className="cities__map map"></section>
  );
}

export default Map;
