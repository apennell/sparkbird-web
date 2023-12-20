/**
 * TODO: Add carbon calculator and any relevant s18y info
 */
import styles from "./footer.module.css";

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className="body2">&#169; Sparkbird Works LLC, {year}</p>
      </div>
      <div className={styles.footerLinksContainer}>
        <div className={styles.footerLinksGroup}>
          <div className={styles.footerItem}>
            <b>₊⊹⁺˖</b>
          </div>
          <div className={styles.footerItem}>
            <a
              href="https://www.linkedin.com/in/anniepennell/"
              target="_blank"
              rel="noopener"
              className="body1"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.footerLinksGroup}>
          <div className={styles.footerItem}>
            <a
              href="https://github.com/apennell"
              target="_blank"
              rel="noopener"
              className="body1"
            >
              GitHub
            </a>
          </div>
          <div className={styles.footerItem}>
            <a href="mailto:hello@sparkbird.works" className="body1">
              hello@sparkbird.works
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
