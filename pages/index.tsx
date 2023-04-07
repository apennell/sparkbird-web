import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Sparkbird Works</title>
        <meta
          name="description"
          content="Performant Web experiences driven by the principles of accessbility and sustainability."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <header>
          <h1>
            <span aria-hidden>₊⊹⁺˖</span> Sparkbird Works
          </h1>
        </header>

        <p className={styles.headline}>
          Thoughtful and performant Web experiences, powered by the principles
          of{" "}
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
        </p>
        <div>
          <p className={styles.bodyLg}>
            Contact{" "}
            <a href="mailto:hello@sparkbird.works">hello@sparkbird.works</a> to
            inquire about our services.
          </p>
          <p className={styles.bodySm}>Copyright Annie Pennell 2023</p>
        </div>
      </main>
    </>
  );
}
