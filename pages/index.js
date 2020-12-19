import Typed from "react-typed";
import styles from "../styles/Home.module.css";

function Link(props) {
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
        <Link url="#" text="Blog" />
        <Link url="https://www.github.com/notakay" text="GitHub" />
        <Link url="https://www.twitter.com/notakay_" text="Twitter" />
        <Link url="https://www.linkedin.com/in/aungkhantko" text="LinkedIn" />
      </div>
    </div>
  );
}
