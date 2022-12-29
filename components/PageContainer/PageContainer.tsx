import Background from '../../components/Background/Background';
import styles from './page-container.module.scss';

type PageContainerProps = {
  children: React.ReactNode;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div className={styles.pageContainer}>
      <Background />
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
