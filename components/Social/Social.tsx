import styles from './social.module.scss';
import Facebook from '../../assets/images/facebook-f.svg';
import Twitter from '../../assets/images/twitter.svg';
import Instagram from '../../assets/images/instagram.svg';

export default function Social() {
  return (
    <div className={styles.social}>
      <button className={styles.icon}>
        <Facebook />
      </button>

      <button className={styles.icon}>
        <Twitter />
      </button>

      <button className={styles.icon}>
        <Instagram />
      </button>
    </div>
  );
}
