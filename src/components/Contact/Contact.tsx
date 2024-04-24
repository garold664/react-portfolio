import { Mail, Newspaper } from 'lucide-react';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <section className={styles.contact} id="contactme">
      <div className={styles.contactContainer}>
        <h2>Contact me 👇</h2>
        <ul className={styles.contactList}>
          <li>
            <div className={styles.contactIcon}>
              <Mail size={50} />
            </div>
            <div className={styles.contactInfo}>
              <h3>Email: </h3>
              <a href="mailto:garold664@gmail.com" target="_blank">
                garold664@gmail.com
              </a>
            </div>
          </li>
          <li>
            <div className={styles.contactIcon}>
              <img src="./assets/icons/github.svg" alt="github logo" />
            </div>
            <div className={styles.contactInfo}>
              <h3>GitHub: </h3>
              <a href="https://github.com/garold664" target="_blank">
                https://github.com/garold664
              </a>
            </div>
          </li>
          <li>
            <div className={styles.contactIcon}>
              <Newspaper size={50} />
            </div>
            <div className={styles.contactInfo}>
              <h3>Resume: </h3>
              <a
                href="https://kazan.hh.ru/resume/7bd2fe35ff02f095eb0039ed1f6657587a5846"
                target="_blank"
              >
                hh.ru
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
