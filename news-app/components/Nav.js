import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div>
      <nav className={navStyles.nav}>
      <div className={navStyles.logo}>KTimes</div>
      
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/topstories">Top Stories</Link>
          </li>
          <li>
            <Link href="/worldnews">World News</Link>
          </li>
          <li>
            <Link href="/regionalnews">Regional News</Link>
          </li>
          <li>
            <Link href="/othernews">Other News</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
