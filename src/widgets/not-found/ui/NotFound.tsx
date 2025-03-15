import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigateMainPage = () => {
    navigate('/');
  };

  return (
    <div className={styles.notFound}>
      <div>404</div>
      <div>Page Not Found</div>
      <button onClick={handleNavigateMainPage}>Back to main page</button>
    </div>
  );
};

export default NotFound;
