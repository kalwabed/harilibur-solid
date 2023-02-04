import styles from './month.module.css'
import { JSX } from 'solid-js'

const Month = ({ month, children }: { month: string; children: JSX.Element }) => {
  return (
    <div class={styles.month_wrapper}>
      <h3 class={styles.month}>{month}</h3>
      {children}
    </div>
  )
}

export default Month
