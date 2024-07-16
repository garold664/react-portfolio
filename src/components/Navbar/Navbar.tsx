import { BrainCircuit } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

import styles from './Navbar.module.scss';

export default function Navbar() {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function handleMobileMenu() {
    setIsMobileMenu((isOpened) => !isOpened);
  }
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <motion.a
          className={styles.navLogo}
          initial={{ scale: 0.2, color: '#ff9900' }}
          animate={{ scale: 1, color: '#ffffff' }}
          // transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          transition={{ duration: 0.1 }}
          href="#"
        >
          <BrainCircuit strokeWidth={3} size={52} />
        </motion.a>
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
