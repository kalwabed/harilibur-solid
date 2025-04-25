import { component$ } from "@builder.io/qwik";
import styles from "./card-sider.module.css";
import { toDateDay, toDateNumber } from "~/utils/date-formatter";

const CardSider = component$(({ holidayDate }: { holidayDate?: string }) => {
  return (
    <div data-testId="card-sider" class={styles.card_sider}>
      <p class={styles.date_day}>{toDateDay(holidayDate ?? "")}</p>
      <p class={styles.date_number}>{toDateNumber(holidayDate ?? "")}</p>
    </div>
  );
});

export default CardSider;
