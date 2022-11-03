import Head from "next/head";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import WelcomePage from "../components/WelcomePage";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Ecommerce App</title>
        <meta
          name="description"
          content="This is a shopping cart application built with Nextjs, Typescript, Xata & Cloudinary."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <WelcomePage />
      </div>
    </div>
  );
}
