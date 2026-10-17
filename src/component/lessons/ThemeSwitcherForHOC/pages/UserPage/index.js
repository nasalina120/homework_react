import React from "react";
import { ThemeContext } from "../../contexts";
import CONSTANTS from "../../constants";

import styles from "../../styles/Footer.module.sass";

import classNames from "classnames";

const { LIGHT, DARK, PINK } = CONSTANTS.THEME;
export default function UserPage() {
  return (
    <div>
      <Header />
      <main> Main </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <span>Header</span>
      <ThemeSwitcher />
    </header>
  );
}

function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {({ theme, setTheme }) => {
        const changeTheme = ({ target: { value } }) => {
          setTheme(value);
        };
        return (
          <select value={theme} onChange={changeTheme}>
            <option value={LIGHT}>LIGHT</option>
            <option value={DARK}>DARK</option>
            <option value={PINK}>PINK</option>
          </select>
        );
      }}
    </ThemeContext.Consumer>
  );
}

function Footer() {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => {
        const footerClassName = classNames({
          [styles.lightThemeFooter]: theme === LIGHT,
          [styles.darkThemeFooter]: theme === DARK,
          [styles.pinkThemeFooter]: theme === PINK,
        });

        return (
          <footer className={footerClassName}>
            <span>Footer</span>
          </footer>
        );
      }}
    </ThemeContext.Consumer>
  );
}
