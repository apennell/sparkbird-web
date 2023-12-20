import Card from "./Card";
import styles from "./testimonial.module.css";

export type Testimonial = {
  client: {
    name: string;
    company?: string;
    title?: string;
  };

  pullQuote: string | React.ReactNode;

  quote: React.ReactNode;
};

export const Testimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { client, pullQuote, quote } = testimonial;
  const clientStr = [client.company, client.title].join(", ");
  return (
    <>
      <h2 className="titleSm">Testimonial</h2>
      <Card size="md">
        <div className={styles.quoteWrapper}>
          <span className={styles.quoteMark} aria-hidden="true">
            &ldquo;
          </span>{" "}
          <div className={styles.contentWrapper}>
            <blockquote className="titleLg yellowBgTitle">
              {pullQuote}
            </blockquote>
            <div className={`${styles.quoteBody} body2`}>{quote}</div>
            <div>
              <p className="caption">{client.name}</p>
              <p className="body2">{clientStr}</p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
