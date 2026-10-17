import React, { Component } from "react";
import classNames from "classnames";
import styles from "./LoginForm.module.css";

const INITIAL_VALUES = { email: "", password: "" };
const LOGINFORM_REG = {
  email: /^.+@.+\$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}\$/,
};

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: INITIAL_VALUES.email,
      isEmailValid: false,
      isPasswordValid: false, // Добавлено для валидации пароля
      password: INITIAL_VALUES.password,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit:", this.state); // Пример использования данных
    this.setState({
      ...INITIAL_VALUES,
      isEmailValid: false,
      isPasswordValid: false,
    });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      email: value,
      isEmailValid: LOGINFORM_REG.email.test(value), // Исправлена опечатка
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      password: value,
      isPasswordValid: LOGINFORM_REG.password.test(value),
    });
  };

  render() {
    const { email, password, isEmailValid, isPasswordValid } = this.state;

    const emailClassName = classNames(styles.input, {
      [styles.inputValid]: isEmailValid,
      [styles.inputInvalid]: !isEmailValid,
    });
    const passwordClassName = `${styles.input} ${isPasswordValid ? styles.inputValid : styles.inputInvalid}`;

    return (
      <div className={styles.formContainer}>
        <h1 className={styles.formHeader}>index</h1>
        <form className={styles.loginForm} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            <span className={styles.inputName}>email</span>
            <input
              className={emailClassName}
              name="email"
              type="email"
              placeholder="youremail"
              value={email}
              onChange={this.handleEmailChange}
              autoFocus
            />
          </label>
          <label className={styles.label}>
            <span className={styles.inputName}>password</span>
            <input
              className={passwordClassName}
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={this.handlePasswordChange}
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
