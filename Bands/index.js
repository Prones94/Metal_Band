import React from 'react'
import './style.css'
import data from '../data/metal.json'
import BandInfo from '../Info'
import Like from '../Like'



const Bands = () => {
  console.log(data.length)
  return (
    <div className="Bands">
      <h3>Metal Bands</h3>
      <p>Bands: <span>{data.length}</span></p>
      <div className="bandInfo">
      {
        data.map(({ band_name, origin, formed, fans }, i) => {
          return (
            <BandInfo
              band_name={`${band_name}`}
              formed={`${formed}`}
              origin={`${origin}`}
              fans = {`${fans}`}
            />
          )
        })
      }
      </div>
      <div>
      </div>
      
    </div>
  )
}

export default Bands
