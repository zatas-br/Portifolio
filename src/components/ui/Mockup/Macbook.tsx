import styles from './macbook.module.css';

interface MacbookMockupProps {
  children: React.ReactNode;
}

export default function MacbookMockup({ children }: MacbookMockupProps) {
  return (
    <div className={styles['macbook']}>
      <div className={styles['macbook-screen']}>
        <div className={styles['macbook-viewport']}>
          {children}
        </div>
      </div>
      <div className={styles['macbook-base']}>
        <div className={styles['macbook-notch']} />
      </div>
    </div>
  );
}