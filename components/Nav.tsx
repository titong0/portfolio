import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const getSelectedStyle = (route: string) => {
    return router.asPath === route ? "underline" : "";
  };

  return (
    <nav className="fixed top-0 z-10 flex items-center justify-between w-full h-16 px-5 text-lg bg-black sm:text-base sm:h-12 text-stone-200">
      <h2 className={`cool-underline ${getSelectedStyle("/")}`}>
        <Link href="/">A.E</Link>
      </h2>
      <ul className="flex justify-around gap-5">
        <li className={`cool-underline ${getSelectedStyle("/about")} `}>
          <Link href="/about">About me</Link>
        </li>
        <li className={` ${getSelectedStyle("/projects")}`}>
          <Link href="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
