import Link from "next/link";

const Header = () => {
  return (
    <>
      <Link legacyBehavior href="/">
        <a>Home</a>
      </Link>
      <Link legacyBehavior href="/portfolio">
        <a>Portfolio</a>
      </Link>
      <Link legacyBehavior href="/blogs">
        <a>Blog</a>
      </Link>
      <Link legacyBehavior href="/about">
        <a>About</a>
      </Link>
      <Link legacyBehavior href="/cv">
        <a>CV</a>
      </Link>
    </>
  );
};

export default Header;
