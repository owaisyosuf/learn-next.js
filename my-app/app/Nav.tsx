import Link from "next/link";

export default function Nav() {
  return (
    <div id="navbar">
      <Link href="/"> Home</Link> <Link href="./contact"> Contact</Link>
      <Link href="./about"> about</Link>
      <Link href="./products"> Products</Link>
    </div>
  );
}
