import React, { Component } from "react";
import getWeather from "./app/index";

export default class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 52.52,
      longitude: 13.41,
      tempUnit: "fahrenheit",
      windUnit: "ms",

      temperature: null,
      windSpeed: null,
      units: null,
      error: null,
      isFetching: true,
    };
  }

  componentDidMount() {
    this.load();
  }
  load = () => {
    const { latitude, longitude, tempUnit, windUnit } = this.state;
    this.setState({ isFetching: true });
    getWeather({
      latitude: latitude,
      longitude: longitude,
      tempUnit: tempUnit,
      windUnit: windUnit,
    })
      .then((data) => {
        this.setState({
          temperature: data.current.temperature_2m,
          windSpeed: data.current.wind_speed_10m,
          units: data.current_units,
        });
      })
      .catch((e) => this.setState({ error: e }))
      .finally(() => this.setState({ isFetching: false }));
  };
  render() {
    const { temperature, windSpeed, units, error, isFetching } = this.state;
    return (
      <>
        {error && <div>!!!ERROR!!! {JSON.stringify(error)}</div>}

        {isFetching && <div>Loading. Please wait...</div>}

        {!error && !isFetching && (
          <div>
            <p>
              temperature: {temperature} {units.temperature_2m}
            </p>
            <p>
              windSpeed: {windSpeed} {units.wind_speed_10m}
            </p>
          </div>
        )}
      </>
    );
  }
}
