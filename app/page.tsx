import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Link href="/notes/1">Note 1 (statically generated)</Link>
        <Link href="/notes/2">Note 2 (dinamically generated)</Link>
      </div>
    </main>
  );
}
