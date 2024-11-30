// @ts-ignore
import styles from '../styles/moon.module.scss'

export function Moon() {
  return (
    <div className={styles.shadow}>
      <div className={styles.moon}>
        <div className={styles.disc} />
      </div>
    </div>
  )
}