import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Preview(props) {
  return (
    <>
      <Link href={"/blog" + props.post.link}>
        <a className={styles.link}>{props.post.module.meta.title}</a>
      </Link>
      <br />
    </>
  );
}
