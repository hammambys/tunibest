import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Sidebar.module.css";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="bg-white">
      <ul className="text-black navbar-nav">
        <li className={router.pathname == "/" ? styles.active + "" : ""}>
          {" "}
          <div className="p-2 element">
            <Link href="/" className="p-4">
              Home
            </Link>{" "}
          </div>
        </li>
        <li className={router.pathname == "/createserie" ? styles.active : ""}>
          {" "}
          <div className="">
            <Link href="/createserie">Create Serie</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
