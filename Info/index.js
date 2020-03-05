import React from 'react'
import './style.css'
import data from '../data/metal.json'
import Like from '../Like'


function BandInfo({band_name,fans, origin,formed}) {
  console.log(data)
  return (
    <div className="bandInfo">
      <h3>{band_name}</h3>
      <h3>Formed: {formed} Fans: {fans}</h3>
      <h3>{origin}</h3>
      <Like />
    </div>
  )
}

export default BandInfo
