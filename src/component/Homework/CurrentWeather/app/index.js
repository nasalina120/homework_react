function getWeather(options) {
  const { latitude, longitude, tempUnit, windUnit } = options;
  return fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,wind_direction_10m&temperature_unit=${tempUnit}&wind_speed_unit=${windUnit}&timezone=auto`,
  ).then((response) => response.json());
}
export default getWeather;
