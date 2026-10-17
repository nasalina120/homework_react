import React from "react";
import { TempUnitContext, WindUnitContext } from "../context";
import styles from "./ChangeUnit.module.sass";

export default function ChangeUnit() {
  return (
    <>
      <WindUnitContext.Consumer>
        {({ windUnit, changeWindUnit }) => (
          <div className={styles.group}>
            <label>Wind speed unit:</label>
            <select value={windUnit} onChange={changeWindUnit}>
              <option value="kmh">km/h</option>
              <option value="ms">m/s</option>
            </select>
          </div>
        )}
      </WindUnitContext.Consumer>

      <TempUnitContext.Consumer>
        {({ tempUnit, changeTempUnit }) => (
          <div className={styles.group}>
            <label>Temperature unit:</label>
            <select value={tempUnit} onChange={changeTempUnit}>
              <option value="fahrenheit">fahrenheit</option>
              <option value="celsius">celsius</option>
            </select>
          </div>
        )}
      </TempUnitContext.Consumer>
    </>
  );
}
