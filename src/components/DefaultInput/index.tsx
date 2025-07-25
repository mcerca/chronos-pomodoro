import styles from './styles.module.css';

// type: 'text'| 'password' | 'search'... - Uso de tupla
type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<'input'>; // herda todas as propriedades do input

export function DefaultInput({
  id,
  type,
  labelText,
  ...rest
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}

      <input type={type} id={id} {...rest} className={styles.input} />
    </>
  );
}
