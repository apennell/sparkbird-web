import Link from "next/link";

import styles from "./header.module.css";
import { Email } from "../_icons/email";

export default function Header() {
  const navLinks = [
    {
      _id: "contact",
      href: "mailto:hello@sparkbird.works",
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
    <header>
      <nav className={styles.nav}>
        <Link href="/" className={`${styles.homeLink} titleLg`}>
          <span aria-hidden>₊⊹⁺˖</span> sparkbird works
        </Link>
        {navLinks.length > 0 &&
          navLinks.map((link) => (
            <div key={`${link._id}-nav`} className={styles.navItem}>
              {link.external ? (
                <a href={link.href} target="_blank" className="body1 monoLink">
                  {link.title}
                </a>
              ) : (
                <Link href={`/${link.href}`}>{link.title}</Link>
              )}
            </div>
          ))}
      </nav>
    </header>
  );
}
