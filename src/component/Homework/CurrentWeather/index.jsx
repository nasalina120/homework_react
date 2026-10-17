import React, { Component } from "react";
import getWeather from "./app/index";
import ChangeUnit from "./changeUnit";
import { TempUnitContext, WindUnitContext } from "./context";
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa";

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

  componentDidUpdate(prevProps, prevState) {
    const { tempUnit, windUnit } = this.state;

    if (tempUnit !== prevState.tempUnit || windUnit !== prevState.windUnit) {
      this.load();
    }
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

  changeTempUnit = ({ target: { value: newtempUnit } }) => {
    this.setState({ tempUnit: newtempUnit });
  };

  changeWindUnit = ({ target: { value: newWindUnit } }) => {
    this.setState({ windUnit: newWindUnit });
  };

  render() {
    const {
      temperature,
      windSpeed,
      units,
      error,
      isFetching,
      tempUnit,
      windUnit,
    } = this.state;

    return (
      <>
        {error && <div>!!!ERROR!!! {JSON.stringify(error)}</div>}

        {isFetching && <div>Loading. Please wait...</div>}

        {!error && !isFetching && (
          <div>
            <p>
              temperature: {temperature} {units.temperature_2m}
              {temperature <= 0 ? <FaTemperatureLow /> : <FaTemperatureHigh />}
            </p>
            <p>
              windSpeed: {windSpeed} {units.wind_speed_10m}
            </p>

            <TempUnitContext.Provider
              value={{ changeTempUnit: this.changeTempUnit, tempUnit }}
            >
              <WindUnitContext.Provider
                value={{ changeWindUnit: this.changeWindUnit, windUnit }}
              >
                <ChangeUnit />
              </WindUnitContext.Provider>
            </TempUnitContext.Provider>
          </div>
        )}
      </>
    );
  }
}
