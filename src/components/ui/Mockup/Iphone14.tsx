import styles from './iphone14.module.css';

interface MobilePreviewProps {
  children: React.ReactNode;
}

export default function MobilePreviewIphone14({ children }: MobilePreviewProps) {
  return (
      <div className={`${styles['device-iphone-14']} ${styles['device-purple']}`}>
        <div className={styles['device-frame']}>
          <div className={styles['device-screen']}>
            {children}
          </div>
          <div className={styles['device-header']}></div>
          <div className={styles['device-sensors']}></div>
          <div className={styles['device-btns']}></div>
          <div className={styles['device-power']}></div>
        </div>
      </div>
  );
}