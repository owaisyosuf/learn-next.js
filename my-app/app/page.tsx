import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Nav from "./Nav";

export default function Home() {
  return (
    <div id="heading">
      <Nav />
      <h1>this is home page</h1>
    </div>
  );
}
