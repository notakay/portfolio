import Typed from "react-typed";
import Link from "next/link";
import styles from "../styles/Home.module.css";

function ExternalLink(props) {
  return (
    <a className={styles.link} href={props.url} target="_blank">
      {props.text}
    </a>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.header1}>Hi! I'm Akay.</h1>
        <h2 className={styles.header2}>
          I'm a&nbsp;
          <Typed
            strings={["Student", "Coder", "Hacker"]}
            typeSpeed={50}
            backSpeed={60}
            loop
          ></Typed>
        </h2>
      </div>
      <div>
        <Link href="/blog">
          <a className={styles.link}>Blog</a>
        </Link>
        <ExternalLink url="https://www.github.com/notakay" text="GitHub" />
        <ExternalLink url="https://www.twitter.com/notakay_" text="Twitter" />
        <ExternalLink
          url="https://www.linkedin.com/in/aungkhantko"
          text="LinkedIn"
        />
      </div>
    </div>
  );
}
