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
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>coming soon...</p>
        </div>
        <div className={styles.center}>
          <h1>Sparkbird Works</h1>
          <p>
            Thoughtful and performant Web experiences powered by the principles
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
        </div>
        <div>
          <p>
            Contact{" "}
            <a href="mailto:hello@sparkbird.works">hello@sparkbird.works</a> to
            inquire about our services.
          </p>
          <p>Copyright Annie Pennell 2023</p>
        </div>
      </main>
    </>
  );
}
