import styles from "../styles/Home.module.css";
import { posts } from "../getAllPosts";
import Preview from "../components/Preview";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.header1}>Blog</h1>
      </div>
      {posts.map((post) => (
        <Preview key={post.link} post={post} />
      ))}
    </div>
  );
}
