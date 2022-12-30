import styles from './social.module.scss';
import Facebook from '../../assets/images/facebook-f.svg';
import Twitter from '../../assets/images/twitter.svg';
import Instagram from '../../assets/images/instagram.svg';

export default function Social() {
  return (
    <div className={styles.social}>
      <button className={styles.icon} aria-label='Facebook'>
        <Facebook />
      </button>

      <button className={styles.icon} aria-label='Twitter'>
        <Twitter />
      </button>

      <button className={styles.icon} aria-label='Instagram'>
        <Instagram />
      </button>
    </div>
  );
}
