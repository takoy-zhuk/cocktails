import styles from './Layout.module.scss';
import { ReactNode } from 'react';

interface PropTypes {
  navbar: ReactNode;
  outlet: ReactNode;
}

const Layout = ({ navbar, outlet }: PropTypes) => {
  return (
    <div className={styles.layout}>
      <div className={styles.leftBlock}>{navbar}</div>
      <div className={styles.rightBlock}>{outlet}</div>
    </div>
  );
};

export default Layout;
