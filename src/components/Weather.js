import React from 'react'

const Weather = ({info}) => {
  if(info.message){
    return (
      <div className='infoWeather'>{info.message}</div>
    )
  }
  else{
    return (
    <div className='infoWeather'>
        <p>Location: {info.country}</p>
        <p>City: {info.city}</p>
        <p>Temp: {info.temp}</p>
        <p>Pressure: {info.preasure}</p>
        <p>Sunset: {info.sunset}</p>
    </div>
  )
  }
}

export default Weather