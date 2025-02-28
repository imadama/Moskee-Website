```tsx
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import { Card } from '@/components/ui/card';

// Fix for default marker icon in React Leaflet
const defaultIcon = new Icon({
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

// Mosque location coordinates
const MOSQUE_LOCATION = {
  lat: 51.8301, // Replace with actual mosque coordinates
  lng: 4.9738
};

function LocationMarker() {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
      map.flyTo(e.latlng, map.getZoom());
      
      // Calculate distance to mosque
      const distanceInMeters = e.latlng.distanceTo([MOSQUE_LOCATION.lat, MOSQUE_LOCATION.lng]);
      setDistance(distanceInMeters / 1000); // Convert to kilometers
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={defaultIcon}>
      <Popup>
        You are here!<br />
        {distance && `Distance to mosque: ${distance.toFixed(1)} km`}
      </Popup>
    </Marker>
  );
}

export function MosqueLocationFinder() {
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);

  return (
    <Card className="p-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">{t('location.title')}</h2>
        <p className="text-gray-600">{t('location.description')}</p>
      </div>
      
      <div style={{ height: '400px' }} className="rounded-lg overflow-hidden">
        <MapContainer
          center={[MOSQUE_LOCATION.lat, MOSQUE_LOCATION.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[MOSQUE_LOCATION.lat, MOSQUE_LOCATION.lng]} icon={defaultIcon}>
            <Popup>
              HDV Gorinchem<br />
              {t('location.mosqueAddress')}
            </Popup>
          </Marker>
          <LocationMarker />
        </MapContainer>
      </div>
      
      {error && (
        <div className="mt-4 p-4 bg-red-50 text-red-600 rounded">
          {error}
        </div>
      )}
    </Card>
  );
}
```
