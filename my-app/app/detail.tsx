import Link from "next/link";

function Detail() {
  return (
    <div>
      <Link href="/"> Home</Link>
      <Link href="./contact"> Contact</Link>
      <Link href="./about"> about</Link>
      <Link href="./products"> Products</Link>
      <Link href="./products/laptop"> laptop</Link>
    </div>
  );
}
export default Detail;
