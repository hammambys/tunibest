import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <html lang="ar" dir="rtl">
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
          ></link>
        </Head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
          crossorigin="anonymous"
        ></Script>
        <Navbar />
        <main className="d-flex main  bg-light">
          <Sidebar />
          {children}
        </main>
      </html>
    </>
  );
}
