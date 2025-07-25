import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';

export function Form() {
  return (
    <form className={styles.form} action="">
      <div className={styles.form}>
        <DefaultInput
          id="meuInput"
          type="text"
          labelText="React"
          placeholder="Digite algo"
          // defaultValue="Test"
        />
      </div>

      <div className={styles.form}>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className={styles.form}>
        <Cycles />
      </div>

      <div className={styles.form}>
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
