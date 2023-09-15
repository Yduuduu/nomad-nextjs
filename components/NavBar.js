import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link
        className={`${styles.Link}  ${
          router.pathname === "/" ? styles.action : ""
        }`}
        href="/"
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`${styles.Link}  ${
          router.pathname === "/about" ? styles.action : ""
        }`}
      >
        About
      </Link>
    </nav>
  );
}
