import React from "react";

import { TempUnitContext, WindUnitContext } from "../context";

export default function ChangeUnit() {
  return (
    <>
      <WindUnitContext.Consumer>
        {({ windUnit, changeWindUnit }) => (
          <select value={windUnit} onChange={changeWindUnit}>
            <option value="kmh">km/h</option>
            <option value="ms">m/s</option>
          </select>
        )}
      </WindUnitContext.Consumer>

      <TempUnitContext.Consumer>
        {({ tempUnit, changeTempUnit }) => (
          <select value={tempUnit} onChange={changeTempUnit}>
            <option value="fahrenheit">fahrenheit</option>
            <option value="celsius">celsius</option>
          </select>
        )}
      </TempUnitContext.Consumer>
    </>
  );
}
