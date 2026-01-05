import styles from './resources.module.css';
import Card from '../_components/Card';

import { resourcesData } from './resources.data';

export default function ResourcesPage() {
  return (
    <main>
      {/** Hero */}
      <div className={styles.heroSection}>
        <Card>
          <h1 className="display">Resources</h1>
        </Card>
      </div>

      <div className={styles.blockContainer}>
        <p>
          Are you ready to start your own journey of green software practices,
          sustainable web development, or low-carbon design? Here are some of my
          favorite resources to begin learning, find community, and stay on top
          of the latest news.
        </p>

        {resourcesData.map(({ category, resources }) => (
          <div key={`resourceCategory-${category}`}>
            <h2 className="headline">{category}</h2>
            <ul>
              {resources.map((resource, j) => (
                <li key={`resource-${j}`}>
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {resource.titleItalic ? (
                      <i>{resource.title}</i>
                    ) : (
                      resource.title
                    )}
                  </a>
                  {resource.source && (
                    <span className={styles.resourceSource}>
                      , by {resource.source}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
