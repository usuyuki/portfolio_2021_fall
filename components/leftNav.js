/** @format */
import Link from "next/link";
import styles from "../styles/leftNav.module.css";
export default function LeftNav(props) {
  return (
    <div>
      <div className="flex sticky top-0 mx-12">
        <div className={styles.leftNav_line}></div>
        <nav className="flex flex-col text-xl text-u_c_5 mt-4">
          <Link href="/">
            <a className="my-2">Home</a>
          </Link>
          <Link href="/profile">
            <a className="my-2">Profile</a>
          </Link>
          <Link href="/works">
            <a className="my-2">Works</a>
          </Link>
          <div className="flex flex-col text-lg ml-4">
            <Link href="/works/web">
              <a className="">web</a>
            </Link>
            <Link href="/works/video">
              <a className="">video</a>
            </Link>
            <Link href="/works/microcomputer">
              <a className="">マイコン</a>
            </Link>
          </div>
          <Link href="/links">
            <a className="my-2">Links</a>
          </Link>
        </nav>
      </div>
    </div>
  );
}
