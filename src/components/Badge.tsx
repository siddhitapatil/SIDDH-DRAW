import { ComponentProps } from "react";
import styles from "./Badge.module.css";

export function Badge({
  className,
  ...props
}: Omit<ComponentProps<"a">, "href">) {
  return (
    <a
      className={styles.badge}
      href=""
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      
      
    </a>
  );
}
