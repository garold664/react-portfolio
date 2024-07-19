import { motion, Variants } from 'framer-motion';

import styles from './Skills.module.scss';

interface SkillsProps {
  variants: Variants;
}
export default function Skills({ variants }: SkillsProps) {
  return (
    <motion.div variants={variants} className={styles.skills}>
      <h2 className={styles.skillsTitle}>Skills: </h2>
      <ul className={styles.skillsList}>
        <li className={styles.skillsItem}>
          <img src="./assets/icons/html5.svg" alt="HTML5" title="HTML5" />
        </li>
        <li className={styles.skillsItem}>
          <img
            src="./assets/icons/typescript.svg"
            alt="TypeScript"
            title="TypeScript"
          />
        </li>
        <li className={styles.skillsItem}>
          <img
            src="./assets/icons/javascript.svg"
            alt="JavaScript"
            title="JavaScript"
          />
        </li>
        <li className={styles.skillsItem}>
          <img src="./assets/icons/react.svg" alt="React" title="React" />
        </li>
        <li className={styles.skillsItem}>
          <img src="./assets/icons/css3.svg" alt="CSS3" title="CSS3" />
        </li>{' '}
        <li className={styles.skillsItem}>
          <img src="./assets/icons/sass.svg" alt="SASS" title="SASS" />
        </li>
        <li className={styles.skillsItem}>
          <img
            src="./assets/icons/tailwind.svg"
            alt="Tailwind"
            title="Tailwind"
          />
        </li>
      </ul>
    </motion.div>
  );
}
