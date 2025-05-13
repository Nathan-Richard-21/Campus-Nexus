import React, { useState, useCallback } from 'react';
import './CampusNavigation.css';
// @ts-ignore
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

const buildings = [
  { name: 'Admin', lat: -31.602360, lng: 28.749856, url: 'https://www.google.com/maps?q=-31.602360,28.749856' },
  { name: 'Examination Office', lat: -31.602438, lng: 28.750024, url: 'https://www.google.com/maps?q=-31.602438,28.750024' },
  { name: 'Residence Office', lat: -31.602197, lng: 28.751150, url: 'https://www.google.com/maps?q=-31.602197,28.751150' },
  { name: 'Chumani', lat: -31.602306, lng: 28.751233, url: 'https://www.google.com/maps?q=-31.602306,28.751233' },
  { name: 'Thuso Print', lat: -31.602635, lng: 28.751872, url: 'https://www.google.com/maps?q=-31.602635,28.751872' },
  { name: 'Isimela', lat: -31.603385, lng: 28.751127, url: 'https://www.google.com/maps?q=-31.603385,28.751127' },
  { name: 'EL', lat: -31.603050, lng: 28.750330, url: 'https://www.google.com/maps?q=-31.603050,28.750330' },
  { name: 'Great Hall', lat: -31.603177, lng: 28.750409, url: 'https://www.google.com/maps?q=-31.603177,28.750409' },
  { name: 'FNB Bank', lat: -31.603296, lng: 28.750149, url: 'https://www.google.com/maps?q=-31.603296,28.750149' },
  { name: 'Ebotwe', lat: -31.603513, lng: 28.750053, url: 'https://www.google.com/maps?q=-31.603513,28.750053' },
  { name: 'FAB', lat: -31.604220, lng: 28.749310, url: 'https://www.google.com/maps?q=-31.604220,28.749310' },
  { name: 'Campus Control', lat: -31.604799, lng: 28.749908, url: 'https://www.google.com/maps?q=-31.604799,28.749908' },
  { name: 'Maintenance', lat: -31.601799, lng: 28.748831, url: 'https://www.google.com/maps?q=-31.601799,28.748831' },
  { name: 'Old Study Center', lat: -31.602408, lng: 28.750109, url: 'https://www.google.com/maps?q=-31.602408,28.750109' },
  { name: 'Residence Office (forwarded)', lat: -31.602663, lng: 28.750094, url: 'https://www.google.com/maps?q=-31.602663,28.750094' },
  { name: 'Snack Bar', lat: -31.602832, lng: 28.750249, url: 'https://www.google.com/maps?q=-31.602832,28.750249' },
  { name: 'Auditorium Main Door', lat: -31.602836, lng: 28.750240, url: 'https://www.google.com/maps?q=-31.602836,28.750240' },
];

const defaultCenter = { lat: -31.6028, lng: 28.7502 };
const mapContainerStyle = { width: '100%', height: '520px', borderRadius: '16px' };

const GOOGLE_MAPS_API_KEY = 'AIzaSyBgN9uR-pfUyxc8YFgo9Yw08u4f-1H7GHM'; // Replace with your key

const CampusNavigation: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const onMarkerClick = useCallback((idx: number) => {
    setSelected(idx);
  }, []);

  return (
    <div className="campus-navigation">
      <h1>Campus Navigation</h1>
      <p>Explore Walter Sisulu University campus. Select a building to see its location and get directions.</p>
      <div className="campus-map-container fade-in">
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={selected !== null ? { lat: buildings[selected].lat, lng: buildings[selected].lng } : defaultCenter}
            zoom={selected !== null ? 18 : 17}
          >
            {buildings.map((b, i) => (
              <Marker
                key={b.name}
                position={{ lat: b.lat, lng: b.lng }}
                label={{
                  text: b.name,
                  color: selected === i ? '#0078d4' : '#003366',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
                onClick={() => onMarkerClick(i)}
                icon={selected === i ? {
                  url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
                } : undefined}
              />
            ))}
            {selected !== null && (
              <InfoWindow
                position={{ lat: buildings[selected].lat, lng: buildings[selected].lng }}
                onCloseClick={() => setSelected(null)}
              >
                <div style={{ minWidth: 180 }}>
                  <h3 style={{ margin: 0 }}>{buildings[selected].name}</h3>
                  <a href={buildings[selected].url} target="_blank" rel="noopener noreferrer">View on Google Maps</a><br />
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${buildings[selected].lat},${buildings[selected].lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0078d4', fontWeight: 600 }}
                  >
                    Get Directions
                  </a>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </div>
      <div className="building-list">
        {buildings.map((b, i) => (
          <div
            key={b.name}
            className={`building-card${selected === i ? ' selected' : ''}`}
            onClick={() => setSelected(i)}
            tabIndex={0}
            style={{ animationDelay: `${i * 0.04}s` }}
          >
            <h3>{b.name}</h3>
            <a href={b.url} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            {selected === i && (
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${b.lat},${b.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: '0.5rem', color: '#0078d4', fontWeight: 600 }}
              >
                Get Directions
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampusNavigation;