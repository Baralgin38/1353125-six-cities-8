import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/useMap';
import {PinIcon} from '../../const';
import {City, Offers} from '../../types/offer';


type MapProps = {
  city: City,
  offers: Offers,
}

const pin = new Icon({
  iconUrl: PinIcon.Path,
  iconSize: PinIcon.Size,
  iconAnchor: PinIcon.Anchor,
});

function Map (props: MapProps): JSX.Element {
  const {city, offers} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker.setIcon(pin).addTo(map);
      });

    }
  }, [map, offers]);

  return (
    <div style={{
      height: '100%',
    }} ref={mapRef}
    >
    </div>
  );
}

export default Map;
