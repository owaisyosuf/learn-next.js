import Link from "next/link";

function Detail() {
  return (
    <div>
      <Link href="./products"> Products</Link>
      <Link href="./products/laptop"> laptop</Link>
    </div>
  );
}
export default Detail;
