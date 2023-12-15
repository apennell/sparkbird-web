import Card from "./_components/card";
import styles from "./page.module.css";

/**
 * TODO:
 * - Possibly make more componentized, and/or use data file for copy
 */
export default function Page() {
  return (
    <main>
      <div className={styles.heroSection}>
        <div className={styles.heroCard}>
          <Card size="lg">
            <h1 className="display">
              Let&apos;s leave the web better than we found it.
            </h1>
          </Card>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionContainer}>
          <h2 className="headline">
            Sparkbird Works is a solo web development studio &#43; consultancy.
            <span className={`titleSm ${styles.aboutHeadlineSm}`}>
              We specialize in building thoughtful and performant web
              experiences, powered by the principles of{" "}
              <a
                href="https://www.w3.org/WAI/fundamentals/accessibility-intro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                accessibility
              </a>{" "}
              and{" "}
              <a
                href="https://www.sustainablewebmanifesto.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                sustainability
              </a>
              .
            </span>
          </h2>
        </div>
      </div>

      <div className={`${styles.section} ${styles.greenSection}`}>
        <div className={styles.sectionContainer}>
          <Card size="sm">
            <h2 className="headline">Services</h2>
            {/** TODO: make these accordion items */}
            <ul className="titleSm">
              <li>Frontend engineering for web applications and websites</li>
              <li>
                Consulting, implementation, and team training in areas of
                expertise, including:
                <ul>
                  <li className="body2">Web accessibility (a11y)</li>
                  <li className="body2">
                    Design systems and component libraries
                  </li>
                  <li className="body2">
                    Sustainability in web design and development; lower the
                    carbon intensity of your projects to reduce environmental
                    impact <i>and</i> improve web performance
                  </li>
                  <li className="body2">
                    Localization (l10n), internationalization (i18n), and
                    translation integrations
                  </li>
                  <li className="body2">Sanity.io CMS content structuring</li>
                </ul>
              </li>
              <li>
                Career support, advice, and coaching for early and mid career
                folks, especially around topics such as:
                <ul>
                  <li className="body2">
                    Navigating life after college{" "}
                    <i>(&quot;help! I got a humanities degree!&quot;)</i>
                  </li>
                  <li className="body2">
                    Landing your first job out of a coding bootcamp
                  </li>
                  <li className="body2">
                    Making tough decisions and evaluating what’s next
                  </li>
                </ul>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      <div className={styles.bottomSection}>
        <a href="mailto:annie@sparkbird.works" className="buttonWhite">
          Work with us
        </a>
      </div>
    </main>
  );
}
