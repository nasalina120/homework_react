import React from "react";
import styles from "../Test.module.sass";

export default function IconBtnWrapper(props) {
  const { children } = props;
  return <button className={styles.btn}>{children}</button>;
}
