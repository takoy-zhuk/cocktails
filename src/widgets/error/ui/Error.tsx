import styles from './Error.module.scss';

interface PropTypes {
  message: string;
  onClick: () => void;
}

const Error = ({ message, onClick }: PropTypes) => {
  return (
    <div className={styles.error}>
      <div>Error:</div>
      <div>{message}</div>
      <button onClick={onClick}>Try again</button>
    </div>
  );
};

export default Error;
