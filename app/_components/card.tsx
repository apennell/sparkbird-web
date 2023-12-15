import styles from "./card.module.css";

export default function Card({
  children,
  size = "md",
  customClass,
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  customClass?: string;
}) {
  return (
    <div className={`${styles.container} ${customClass || ""}`}>
      <div className={`${styles[`${size}Box`]} ${styles.box}`}>{children}</div>
    </div>
  );
}
