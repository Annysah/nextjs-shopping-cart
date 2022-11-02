import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import WelcomePage from "../components/WelcomePage";
import { XataClient } from "../lib/xata";

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Ecommerce App</title>
        <meta
          name="description"
          content="This is an ecommerce application built with Nextjs, Typescript, Xata & Cloudinary."
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

/*const xata = new XataClient()

export const getServerSideProps = async () => {
  const products = await xata.db.products.getMany()
  return {
    props: {
      products,
    },
  }
}*/
