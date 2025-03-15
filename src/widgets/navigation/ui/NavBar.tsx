import { NavLink } from 'react-router-dom';
import { COCKTAIL_CODE } from '@widgets/cocktails-list/api/types.ts';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const links = Object.values(COCKTAIL_CODE);

  return (
    <div className={styles.navbar}>
      <h1>Cocktails</h1>
      <div className={styles.navList}>
        {links.map((link) => (
          <NavLink key={link} to={link} className={({ isActive }) => (isActive ? styles.selected : '')}>
            {link}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
