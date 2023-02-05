import { Show } from 'solid-js'
import { A } from 'solid-start'
import styles from './navigation-button.module.css'

const NavigationButton = ({ type }: { type: 'next' | 'current' }) => {
  return (
    <>
      <Show when={type === 'next'}>
        <div class={styles.wrapper}>
          <A class={styles.link} href={`/${new Date().getFullYear() + 1}`}>
            <svg
              fill="none"
              class={styles.icon}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-line-cap="round" stroke-linejoin="round" stroke-width={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span>Tahun {new Date().getFullYear() + 1}</span>
          </A>
        </div>
      </Show>

      <Show when={type === 'current'}>
        <div classList={{ [styles.wrapper]: true, [styles.start]: true }}>
          <A class={styles.link} href="/">
            <svg
              fill="none"
              class={styles.icon}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path stroke-line-cap="round" stroke-linejoin="round" stroke-width={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Tahun Sekarang</span>
          </A>
        </div>
      </Show>
    </>
  )
}

export default NavigationButton
