import styles from './main.module.scss';
import Hero from '../../assets/images/illustration-mockups.svg';
import Button from '../Button/Button';

export default function Main() {
  return (
    <main className={styles.main}>
      <Hero className={styles.hero} />
      <div className={styles.content}>
        <h1>Build The Community Your Fans Will Love</h1>
        <p>
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <Button label='Register' />
      </div>
    </main>
  );
}
