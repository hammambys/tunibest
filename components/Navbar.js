import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-stone-200">
      <div className="container-fluid">
        <a className="text-red-600" href="/">
          TuniBest
        </a>
      </div>
    </nav>
  );
}
