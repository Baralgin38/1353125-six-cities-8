import {useEffect, useState, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import {LINK_TO_MAP, ATTRIBUTION} from '../const';
import {City} from '../types/offer';

function useMap (
  mapRef: MutableRefObject<HTMLElement | null>,
  city: City,
): Map | null {

  const [map, setMap] = useState<Map | null>(null);

  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      const layer = new TileLayer (
        LINK_TO_MAP,
        {attribution: ATTRIBUTION},
      );

      instance.addLayer(layer);

      setMap(instance);
    }
  },[mapRef, map, city]);

  return map;
}

export default useMap;
