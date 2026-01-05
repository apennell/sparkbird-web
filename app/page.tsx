/**
 * TODO:
 * - Fix wordmark nav hover style
 * - Separate services into separate cards
 */

import Card from './_components/Card';
import { Testimonial } from './_components/Testimonial';
import {
  aboutSectionData,
  servicesSectionData,
  testimonials,
} from './page.data';
import styles from './page.module.css';

export default function Page() {
  return (
    <main>
      {/** Hero */}
      <div className={styles.heroSection}>
        <div className={styles.heroCard}>
          <Card size="lg" customClass={styles.heroCardContainer}>
            <h1 className="display">
              Let&apos;s leave the web better than we found it.
            </h1>
            <a href="mailto:hello@sparkbird.works" className="button">
              Work together
            </a>
          </Card>
        </div>
      </div>

      {/** About */}
      <div className={styles.section}>
        <div className={styles.sectionContainer}>
          <Card size="sm" customClass={styles.aboutCard}>
            <h2 className="headline">Sparkbird Works is...</h2>
          </Card>
          {aboutSectionData.map((section, i) => (
            <div key={`aboutItem-${i}`} className={styles.aboutItem}>
              <h3 className="titleSm greenBgTitle">
                &#9656; {section.headline}
              </h3>
              <div className={styles.aboutContent}>
                <p className="body1">{section.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/** Testimonial */}
      <div className={`${styles.section} ${styles.greenSection}`}>
        <div className={styles.sectionContainer}>
          <Testimonial testimonial={testimonials[0]} />
        </div>
      </div>

      {/** Services */}
      <div
        className={`${styles.section} ${styles.purpleSection}`}
        id="services"
      >
        <div className={styles.sectionContainer}>
          <Card size="md">
            <div className={styles.servicesContainer}>
              <h2 className="headline">Services</h2>

              {servicesSectionData.map((section, i) => (
                <div key={`servicesItem-${i}`}>
                  <h3 className="titleSm ">{section.headline}</h3>
                  {section.details && (
                    <ul>
                      {section.details.map((detail, j) => (
                        <li key={`servicesItemDetail-${j}`} className="body2">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/** Testimonial */}

      <div className={styles.section}>
        <div className={styles.sectionContainer}>
          <Testimonial testimonial={testimonials[1]} />
        </div>
      </div>

      {/** Contact CTA */}
      <div className={styles.bottomSection}>
        <a href="mailto:hello@sparkbird.works" className="buttonWhite">
          Work with us
        </a>
      </div>
    </main>
  );
}
