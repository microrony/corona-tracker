import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'

const Map = ({ eventData }) => {
  const redOptions = { color: 'red' }
  const markers = eventData.map((ev, index) => {
      return (
        <CircleMarker
          key={index}
          center={[ev.countryInfo.lat, ev.countryInfo.long]}
          pathOptions={redOptions}
          radius={20}
        >
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
      )
  })

  const position = [43.32, -122.87]
  const zoom = 2

  return (
    <MapContainer className="map" center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </MapContainer>
  )
}

export default Map
