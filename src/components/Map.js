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
        <Popup className='popup'>
          <ul>
            <h3>{ev.country}</h3>
            <li>{`Total cases: ${ev.cases}`}</li>
            <li>{`Deaths: ${ev.deaths}`}</li>
            <li>{`Recovered: ${ev.recovered}`}</li>
            <li>{`Critical: ${ev.critical}`}</li>
          </ul>
        </Popup>
      </CircleMarker>
    )
  })

  const position = [23, 90]
  const zoom = 5

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
