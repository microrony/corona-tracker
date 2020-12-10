import { MapContainer, TileLayer } from 'react-leaflet'

const Map = () => {
  const center = [24.63, 90.45]
  const zoom = 6
  return (
    <MapContainer className="map" center={center} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default Map