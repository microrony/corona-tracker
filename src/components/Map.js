import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'

const Map = () => {
  const position = [43.32, -122.87]
  const zoom = 6
  const redOptions = { color: 'red' }

  return (
    <MapContainer className="map" center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CircleMarker center={position} pathOptions={redOptions} radius={20}>
      <Popup>Popup in CircleMarker</Popup>
    </CircleMarker>
    </MapContainer>
  )
}

export default Map