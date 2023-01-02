import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  const getSelectedStyle = (route: string) => {
    return router.asPath === route ? "underline" : "";
  };
  if (router.asPath === "/") return null;
  return (
    // <nav className="fixed top-0 z-10 flex items-center justify-between w-full h-16 px-5 text-lg bg-blue-300 border-b sm:text-base sm:h-12 text-stone-900">
    //   <h2 className={`cool-underline ${getSelectedStyle("/")}`}>
    //     <Link href="/">A.E</Link>
    //   </h2>
    //   <ul className="flex justify-around gap-5">
    //     <li className={`cool-underline ${getSelectedStyle("/projects")}`}>
    //       <Link href="/projects">Projects</Link>
    //     </li>
    //     <li className={`cool-underline ${getSelectedStyle("/about")} `}>
    //       <Link href="/about">About me</Link>
    //     </li>
    //   </ul>
    // </nav>
    <nav className="fixed transition -translate-x-6 -translate-y-6 hover:blur-none blur-[2px] hover:-translate-y-3 hover:-translate-x-3">
      <Link href="/">
        <div className="p-6 text-xl bg-blue-400 rounded-full">A.E</div>
      </Link>
    </nav>
  );
};

export default Nav;
