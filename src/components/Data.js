import React from 'react'
import { apiKey, baseUrl } from '../units/constants';
import Form from './Form';
import Weather from './Weather';

class Data extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: {
        temp: null,
        city: null,
        country: null,
        preasure: null,
        sunset: null,
        message: "Enter city name",
      }
    }
  }

  getWeather = city => {
    fetch(`${baseUrl}?q=${city}&appid=${apiKey}`)
      .then(responce => responce.json())
      .then(data => this.setState({
        weatherInfo: {
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          preasure: data.main.pressure,
          sunset: data.sys.sunset,
          message: '',
        }
      }
      ))
      .catch(e => {
        this.setState({ weatherInfo: { message: "Enter correct city name" } })
      })
  }

  render() {
    return (
      <div>
        <Form getWeather={this.getWeather} />
        <Weather info={this.state.weatherInfo} />
      </div>
    )
  }
}

export default Data;