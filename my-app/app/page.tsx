import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Nav from "./Nav";

export default function Home() {
  return (
    <div id="heading">
      {/* <Nav /> */}
      <div id="form">
        {" "}
        {/*form start here*/}
        <div id="form1">
          <form action="">
            <label>Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="enter your name"
            />{" "}
            <br />
            <label> Father Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="enter your father name"
            />
            <br />
            <label>Age </label>
            <input type="number" name="" id="" min={18} max={60} />
            <br />
            <label>contact # </label>
            <input type="number" name="" id="" />
            <br />
            <label>gender</label>
            <input type="radio" name="gender" id="" /> male
            <input type="radio" name="gender" id="" /> female
            <br />
            <label>email address</label>
            <input type="email" name="" id="" />
            <br />
            <label>country</label>
            <select name="" id="">
              <option value="">karachi</option>
              <option value="">hydrabad</option>
              <option value="">lahore</option>
            </select>
            <br />
            <button>submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
