import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon  } from 'lucide-react';
import styles from './styles.module.css';
import { useState, useEffect } from 'react';

type AvaliableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] =useState<AvaliableThemes>(() => {
      const storageTheme = 
      (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
      return storageTheme;
    });

    const nextThemeIcon = {
      dark: <SunIcon />,
      light:<MoonIcon />,
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,

    ) {
            
        event.preventDefault(); // Não segue o link

        console.log('Cliclado',Date.now());

        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            
            return nextTheme;
    });
       // document.documentElement.setAttribute('data-theme', theme);
}
  // useEffect(() => {
  //   console.log('useEffect sem dependências', Date.now());
  // }); // Executado todas vez que o componente renderiza na tela

  // useEffect(() => {
  //   console.log('useEffect com array deps vazio', Date.now());
  // }, []); // Executa apenas quando o React monta o componente na tela pela primeira vez

  useEffect(() => {
    console.log('Theme mudou', theme, Date.now());
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme',theme);

    return () => {
      console.log('Olha, este componente será atualizado');
    };
  }, [theme]); // Executa apenas quando o valor de theme muda


    return <nav className={styles.menu}>
        
        <a className={styles.menuLink} href="#" 
        aria-label='Ir para a Home'
         title='Ir para a Home'>
            <HouseIcon />
        </a>
        
         <a className={styles.menuLink} href="#" aria-label='Ver Histórico' title='Ver Histórico'>
            <HistoryIcon />
        </a>

         <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'>
            <SettingsIcon />
        </a>

         <a className={styles.menuLink} href="#" 
         aria-label='Mudar Tema' 
         title='Mudar Tema'
         onClick={handleThemeChange}
         >
           {nextThemeIcon [theme]}
        </a>
    </nav>;
}