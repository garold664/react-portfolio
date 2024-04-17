import { BrainCircuit } from 'lucide-react';
import styles from './Navbar.module.scss';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function handleMobileMenu() {
    setIsMobileMenu((isOpened) => !isOpened);
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <a className={styles.navLogo} href="#">
          <BrainCircuit strokeWidth={3} size={52} />
        </a>
        <ul className={`${styles.navList} ${isMobileMenu && styles.opened}`}>
          <li className={styles.navItem}>
            <a href="#" className={styles.navLink}>
              Home
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#skills" className={styles.navLink}>
              Skills
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#portfolio" className={styles.navLink}>
              Portfolio
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#contactme" className={styles.contactLink}>
              Contact me
            </a>
          </li>
        </ul>
        <button
          onClick={handleMobileMenu}
          className={`${styles.burgerBtn} ${isMobileMenu && styles.opened}`}
        >
          <span></span>
        </button>
      </div>
    </nav>
  );
}
