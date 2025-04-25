import { JSX } from "solid-js";

import styles from "./grid-wrapper.module.css";

const GridWrapper = ({
  headerTitle,
  children,
}: {
  headerTitle: string;
  children: JSX.Element;
}) => {
  return (
    <section class={styles.section}>
      <h2 class={styles.h2}>{headerTitle}</h2>
      {children}
    </section>
  );
};

export default GridWrapper;
