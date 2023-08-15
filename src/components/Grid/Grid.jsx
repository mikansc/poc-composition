/* eslint-disable react/prop-types */
import styles from "./Grid.module.scss";

export const Grid = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
