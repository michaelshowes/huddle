import styles from './button.module.scss';

type ButtonProps = {
  label: string;
};

export default function Button({ label }: ButtonProps) {
  return <button className={styles.button}>{label}</button>;
}
