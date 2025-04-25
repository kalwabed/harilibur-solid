import { Link } from "@builder.io/qwik-city";
import styles from "./navigation-button.module.css";
import { component$ } from "@builder.io/qwik";

const NavigationButton = component$(
  ({ type }: { type: "next" | "current" }) => {
    return (
      <>
        {type === "next" ? (
          <div class={styles.wrapper}>
            <Link class={styles.link} href={`/${new Date().getFullYear() + 1}`}>
              <svg
                fill="none"
                class={styles.icon}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-line-cap="round"
                  stroke-linejoin="round"
                  stroke-width={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              <span>Tahun {new Date().getFullYear() + 1}</span>
            </Link>
          </div>
        ) : (
          <div class={{ [styles.wrapper]: true, [styles.start]: true }}>
            <Link class={styles.link} href="/">
              <svg
                fill="none"
                class={styles.icon}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-line-cap="round"
                  stroke-linejoin="round"
                  stroke-width={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Tahun Sekarang</span>
            </Link>
          </div>
        )}
      </>
    );
  },
);

export default NavigationButton;
