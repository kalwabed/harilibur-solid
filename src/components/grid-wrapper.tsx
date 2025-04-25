import { Slot, component$ } from "@builder.io/qwik";
import styles from "./grid-wrapper.module.css";

const GridWrapper = component$(({ headerTitle }: { headerTitle: string }) => {
  return (
    <section class={styles.section}>
      <h2 class={styles.h2}>{headerTitle}</h2>
      <Slot />
    </section>
  );
});

export default GridWrapper;
