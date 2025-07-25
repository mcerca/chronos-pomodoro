import styles from './styles.module.css';

type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
};

export function Button({ text }: ButtonProps) {
  return <button className={styles.button}>{text}</button>;
}
