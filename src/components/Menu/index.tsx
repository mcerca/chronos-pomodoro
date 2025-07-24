import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { IMenu } from '../../types/Menu';

const menu: IMenu[] = [
  { id: 1, link: '/', icon: <HomeIcon /> },
  { id: 2, link: '/', icon: <HistoryIcon /> },
  { id: 3, link: '/', icon: <SettingsIcon /> },
  { id: 4, link: '/', icon: <SunIcon /> },
];

export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        {menu.map((m) => (
          <li key={m.id}>
            <a href={m.link}>{m.icon}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
