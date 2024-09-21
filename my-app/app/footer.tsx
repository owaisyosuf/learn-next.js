import Link from "next/link";
function Footer() {
  return (
    <div id="footer">
      {" "}
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
        <p>Contact us: email@example.com</p>
        <p>Follow us on social media: Twitter | Facebook | Instagram</p>
      </footer>
    </div>
  );
}
export default Footer;
