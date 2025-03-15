import { Loader2 } from 'lucide-react';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <Loader2 className={styles.loaderIcon} />
    </div>
  );
};

export default Loader;
