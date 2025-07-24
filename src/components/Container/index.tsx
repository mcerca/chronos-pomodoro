import styles from './styles.module.css';

type ContainerProps = {
  children: React.ReactNode;
  designType?: string;
};

export function Container({ children, designType }: ContainerProps) {
  return (
    <div
      className={
        designType !== 'fluid'
          ? `${styles.container}`
          : `${styles.containerFluid}`
      }
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}
