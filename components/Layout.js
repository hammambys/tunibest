import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Head from "next/head";
import Script from "next/script";
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      <Head></Head>

      <Navbar />
      <main className="">
        <div className="flex">
          <Sidebar />
          {children}
        </div>
      </main>
    </>
  );
}
