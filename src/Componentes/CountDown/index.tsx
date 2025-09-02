import type { HomeProps } from '../../Page/Home';
import styles from './styles.module.css';


export function CountDown({ state }: HomeProps) {
  return (
    <div className={styles.container}>{state.formattedSecondsRemaining}</div>
  );
}