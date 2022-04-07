import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <ul className="navbar-nav">
        <li className={router.pathname == "/" ? styles.active : ""}>
          {" "}
          <div className="p-2">
            <Link href="/" className="p-4">
              الأستقبال
            </Link>{" "}
          </div>
        </li>
        <li className={router.pathname == "/series" ? styles.active : ""}>
          {" "}
          <div className="p-2">
            <Link href="/series">مسلسلات</Link>{" "}
          </div>
        </li>
        <li className={router.pathname == "/shows" ? styles.active : ""}>
          {" "}
          <div className="p-2">
            <Link href="/shows">برامج</Link>{" "}
          </div>
        </li>
        <li className={router.pathname == "/theatre" ? styles.active : ""}>
          {" "}
          <div className="p-2">
            <Link href="/theatre">مسرحيات</Link>{" "}
          </div>
        </li>
      </ul>
    </div>
  );
}
