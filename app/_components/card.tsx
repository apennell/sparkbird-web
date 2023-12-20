import styles from "./card.module.css";

export default function Card({
  children,
  size = "md",
  customClass = "",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  customClass?: string;
}) {
  const containerClasses = [styles.container, customClass].join(" ");
  const boxClasses = [styles.box, styles[`${size}Box`]].join(" ");

  return (
    <div className={containerClasses}>
      <div className={boxClasses}>{children}</div>
    </div>
  );
}
