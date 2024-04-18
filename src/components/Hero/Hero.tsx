import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Front-End <span className={styles.heroTitleHighlight}>React</span>{' '}
            Developer <span className={styles.heroHand}>👋</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Hello, my name is{' '}
            <span className={styles.heroSubtitleHighlight}>
              Niaz Mukhametzianov
            </span>
            . I am a passionate Front-end React Developer based in Kazan, Russia
          </p>
        </div>
        <div className={styles.heroImgContainer}>
          <div className={styles.heroImgHolder}>
            <img
              className={styles.heroImg}
              src="./assets/images/hero-image.jpg"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
