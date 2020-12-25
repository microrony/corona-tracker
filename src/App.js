import { useState, useEffect } from 'react'
import Map from './components/Map'
import axios from 'axios'

const App = () => {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)
    axios('https://corona.lmao.ninja/v2/countries')
    .then(res => {
      const events = res.data;
      setEventData(events)
      setLoading(false)
    })
    .catch('cannot find any data')
    
  }, [])

  return (
    <div>
      { !loading ? <Map eventData={eventData} /> : <h1 className='loading'>Loading...</h1> }
    </div>
  )
}

export default App
