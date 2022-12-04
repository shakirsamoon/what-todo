import { NextPage } from "next";
import styles from '@styles/LoadingCard.module.css';

/**
 * Skeleton of the `Todo` card; Shows while loading data
 *
 */
const LoadingCard: NextPage = () => {
  return (
    <div className={styles.loading_card}>
      <div className={styles.title}></div>
      <div className={styles.body1}></div>
      <div className={styles.body2}></div>
      <div className={styles.button_bar}>
        <div className={styles.button}></div>
        <div className={styles.button}></div>
      </div>
    </div>
  );
}

export default LoadingCard;