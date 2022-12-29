import Logo from '../../assets/images/logo.svg';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
    </header>
  );
}
