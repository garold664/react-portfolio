import Skills from '../Skills/Skills';

import { motion, Variants } from 'framer-motion';

import styles from './Hero.module.scss';

const variants: Variants = {
  initial: {
    x: -1000,
  },
  initialFromRight: {
    x: 1000,
  },
  animate: {
    x: 0,
    transition: { staggerChildren: 0.2, duration: 0.9 },
  },
};

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          variants={variants}
          initial={'initial'}
          animate={'animate'}
        >
          <motion.h1 variants={variants} className={styles.heroTitle}>
            Front-End <span className={styles.heroTitleHighlight}>React</span>
            Developer <span className={styles.heroHand}>👋</span>
          </motion.h1>
          <motion.p variants={variants} className={styles.heroSubtitle}>
            Hello, my name is{' '}
            <motion.span
              variants={variants}
              className={styles.heroSubtitleHighlight}
            >
              Niaz Mukhametzianov
            </motion.span>
            . I am a passionate Front-end React Developer based in Kazan, Russia
          </motion.p>
          <Skills variants={variants} />
        </motion.div>
        <motion.div
          variants={variants}
          className={styles.heroImgContainer}
          initial={'initialFromRight'}
          animate={'animate'}
        >
          <div className={styles.heroImgHolder}>
            <img
              className={styles.heroImg}
              src="./assets/images/hero-image.jpg"
              alt="Image of the front-end developer Niaz Mukhametzianov"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
