import styles from "./footer.module.scss";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-start gap-2 p-2 bg-blue-300 sm:p-4 sm:flex-row sm:gap-12">
      <div className="flex flex-col">
        <h3 className="text-xl font-medium">Contact me</h3>
        <ul className="my-2">
          <li className="flex gap-2 mb-2">
            <AiOutlineMail color="f5f5f5" size="25" />
            <span className="">augustoerrecarte@gmail.com</span>
          </li>
          <li className="flex gap-2">
            <AiOutlineGithub color="f5f5f5" size="25" />
            <span className="">
              <a className="cool-underline" href="https://github.com/titong0">
                github.com/titong0
              </a>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-medium">Links</h3>
        <ul>
          <li>
            <Link className="hover:underline" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="/about">
              About me
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
