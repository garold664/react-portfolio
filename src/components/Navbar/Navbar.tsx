import { BrainCircuit } from 'lucide-react';
import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <a className={styles.navLogo} href="#">
          <BrainCircuit strokeWidth={3} size={52} />
        </a>
        <ul className={styles.navList}>
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
      </div>
    </nav>
  );
}
