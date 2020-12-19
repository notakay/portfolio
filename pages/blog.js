import styles from "../styles/Home.module.css";
import Hello from "./Hello.mdx";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.header1}>Blog</h1>
      </div>
      <Hello />
    </div>
  );
}
