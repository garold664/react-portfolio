import { motion, Variants } from 'framer-motion';

import styles from './Skills.module.scss';

interface SkillsProps {
  variants: Variants;
}

const listVariants: Variants = {
  initial: {
    y: -100,
    boxShadow: '0 10px 10px 0px #00a7ea',
  },
  animate: {
    y: 0,
    boxShadow: '0 0px 0px 0px #00a7ea',
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
      staggerDirection: 1,
      when: false,
      repeat: Infinity,
      repeatDelay: 5,
    },
  },
};
export default function Skills({ variants }: SkillsProps) {
  return (
    <motion.div variants={variants} className={styles.skills}>
      <h2 className={styles.skillsTitle}>Skills: </h2>
      <motion.ul className={styles.skillsList}>
        <motion.li variants={listVariants} className={styles.skillsItem}>
          <img src="./assets/icons/html5.svg" alt="HTML5" title="HTML5" />
        </motion.li>
        <motion.li variants={listVariants} className={styles.skillsItem}>
          <img
            src="./assets/icons/typescript.svg"
            alt="TypeScript"
            title="TypeScript"
          />
        </motion.li>
        <motion.li variants={listVariants} className={styles.skillsItem}>
          <img
            src="./assets/icons/javascript.svg"
            alt="JavaScript"
            title="JavaScript"
          />
        </motion.li>
        <motion.li variants={listVariants} className={styles.skillsItem}>
          <img src="./assets/icons/react.svg" alt="React" title="React" />
        </motion.li>
        <motion.li variants={listVariants} className={styles.skillsItem}>
          <img src="./assets/icons/css3.svg" alt="CSS3" title="CSS3" />
        </motion.li>{' '}
        <motion.li variants={listVariants} className={styles.skillsItem}>
          <img src="./assets/icons/sass.svg" alt="SASS" title="SASS" />
        </motion.li>
        <motion.li variants={listVariants} className={styles.skillsItem}>
          <img
            src="./assets/icons/tailwind.svg"
            alt="Tailwind"
            title="Tailwind"
          />
        </motion.li>
      </motion.ul>
    </motion.div>
  );
}
