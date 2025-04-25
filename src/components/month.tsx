import { Slot, component$ } from "@builder.io/qwik";
import styles from "./month.module.css";

const Month = component$(({ month }: { month: string }) => {
  return (
    <div class={styles.month_wrapper}>
      <h3 class={styles.month}>{month}</h3>
      <Slot />
    </div>
  );
});

export default Month;
