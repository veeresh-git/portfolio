import Head from "next/head";
import HomePage from "../components/HomePage";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Param</title>
        <meta name="description" content="Portfolio of Param!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomePage />
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
