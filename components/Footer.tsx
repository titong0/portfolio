import styles from "./footer.module.scss";
import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex flex-col p-4 bg-blue-300">
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
    </footer>
  );
};

export default Footer;
