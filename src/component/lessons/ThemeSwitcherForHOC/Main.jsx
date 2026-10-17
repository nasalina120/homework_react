import React, { Component } from "react";
import CONSTANTS from "./constants";
import { ThemeContext } from "./contexts";
import styles from "./styles/Main.module.sass";

import UserPage from "./pages/UserPage";
import classNames from "classnames";

const { LIGHT, DARK, PINK } = CONSTANTS.THEME;
export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: LIGHT,
      themeFooter: LIGHT,
    };
  }

  setTheme = (newTheme) => {
    this.setState({ theme: newTheme });
  };

  render() {
    const { theme } = this.state;
    const pageClassName = classNames({
      [styles.lightTheme]: theme === LIGHT,
      [styles.darkTheme]: theme === DARK,
      [styles.pinkTheme]: theme === PINK,
    });

    return (
      <>
        <ThemeContext.Provider value={{ theme, setTheme: this.setTheme }}>
          <div className={pageClassName}>
            <UserPage />
          </div>
        </ThemeContext.Provider>
      </>
    );
  }
}
