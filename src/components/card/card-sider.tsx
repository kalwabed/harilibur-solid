import styles from './card-sider.module.css'
import { toDateDay, toDateNumber } from '~/utils/date-formatter'

const CardSider = ({ holidayDate }: { holidayDate: string }) => {
  return (
    <div class={styles.card_sider}>
      <p class={styles.date_day}>{toDateDay(holidayDate)}</p>
      <p class={styles.date_number}>{toDateNumber(holidayDate)}</p>
    </div>
  )
}

export default CardSider
