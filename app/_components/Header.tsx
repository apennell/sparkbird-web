import Link from 'next/link';

import styles from './header.module.css';

export default function Header() {
  const navLinks = [
    {
      _id: 'resources',
      href: 'resources',
      title: 'Resources',
      external: false,
    },
    {
      _id: 'contact',
      href: 'mailto:hello@sparkbird.works',
      title: (
        <>
          <span className={styles.desktopNavLink}>Get in touch</span>
          <span className={styles.mobileNavLink}>Contact</span>
        </>
      ),
      external: true,
    },
  ];

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <div className={styles.homeLink}>
          <Link href="/" className="titleLg">
            <span aria-hidden>₊⊹⁺˖</span> sparkbird works
          </Link>
        </div>
      </div>
      <nav className={styles.linksContainer}>
        {navLinks.map(({ href, external, title, _id }) => (
          <div key={`${_id}-nav`} className={styles.linksGroup}>
            <div className={styles.navItem}>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="body1"
              >
                {title}
              </a>
            </div>
          </div>
        ))}
      </nav>
    </header>
  );
}
