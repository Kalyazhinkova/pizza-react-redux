import styles from './NotFoundBlock.module.scss';

export default function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1>
        <span>🧐</span>
        <br />
        Ничего не найдено!
      </h1>
      <p className={styles.description}>Вы перешли по ошибочной ссылке!</p>
    </div>
  );
}
