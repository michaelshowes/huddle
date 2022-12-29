import styles from './background.module.scss';
import BgMobile from '../../assets/images/bg-mobile.svg';
import BgDesktop from '../../assets/images/bg-desktop.svg';

export default function Background() {
  return (
    <div className={styles.background}>
      <BgMobile className={styles.mobile} />
      <BgDesktop className={styles.desktop} />
    </div>
  );
}
