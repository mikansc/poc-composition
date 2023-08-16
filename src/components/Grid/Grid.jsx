/* eslint-disable react/prop-types */
import styles from "./Grid.module.scss";

/**
 *  Este componente pode ser uma abstração de um grid system.
 *
 * Você pode implementar o display: grid pra exibir qualquer elemento filho
 * em uma estrutura de grid!
 */

export const Grid = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
