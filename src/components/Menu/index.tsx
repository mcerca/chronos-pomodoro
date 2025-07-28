import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
// import { AvailableMenu } from '../../types/Menu';
import { useEffect, useState } from 'react';
import { AvailableThemes } from '../../types/Theme';

// const menu: AvailableMenu[] = [
//   { id: 1, link: '#', icon: <HomeIcon /> },
//   { id: 2, link: '#', icon: <HistoryIcon /> },
//   { id: 3, link: '#', icon: <SettingsIcon /> },
//   { id: 4, link: '#', icon: <SunIcon /> },
// ];

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';

      // Bad practices👇🏽
      // document.documentElement.setAttribute('data-theme', nextTheme);

      return nextTheme;
    });

    console.log('Clicado', Date.now());
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <h3>{theme}</h3>
      <ul>
        {/* {menu.map((m) => (
          <li key={m.id}>
            <a href={m.link} onClick={m.func}>{m.icon}</a>
          </li>
        ))} */}

        <li>
          <a href="#" title="Ir para a Home" aria-label="Ir para a Home">
            <HomeIcon />
          </a>
        </li>
        <li>
          <a href="#" title="Ver histórico" aria-label="Ver histórico">
            <HistoryIcon />
          </a>
        </li>
        <li>
          <a href="#" title="Configurações" aria-label="Configurações">
            <SettingsIcon />
          </a>
        </li>
        <li>
          <a
            href="#"
            title="Mudar Thema"
            aria-label="Mudar Thema"
            onClick={handleThemeChange}
          >
            <SunIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}
