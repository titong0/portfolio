import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiTypescript,
  SiPython,
  SiVercel,
  SiNetlify,
  SiFastify,
} from "react-icons/si";

const Experience = () => {
  return (
    <div className="flex flex-col w-full max-w-xl pb-4 ">
      <h2 className="my-6 text-3xl">Experience</h2>
      <section className="grid gap-3">
        <div className="grid grid-cols-2 gap-2">
          <span>
            I Have a <em className="text-green-600">great amount</em> of
            experience with
          </span>
          <div className="flex gap-1 text-stone-200 sm:flex-wrap">
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#7bc0c8" }}
            >
              <SiReact color="#fafafa" size={32}></SiReact>
            </span>
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#000000" }}
            >
              <SiJavascript color="#dede22" size={32}></SiJavascript>
            </span>
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#E34F26" }}
            >
              <SiHtml5 size={32}></SiHtml5>
            </span>
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#1572B6" }}
            >
              <SiCss3 size={32}></SiCss3>
            </span>
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#000000" }}
            >
              <SiNextdotjs size={32}></SiNextdotjs>
            </span>
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#ffffff" }}
            >
              <SiTailwindcss color="#38bdf8" size={32}></SiTailwindcss>
            </span>

            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#000000" }}
            >
              <SiVercel size={32}></SiVercel>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <span>
            I Have a <em className="text-amber-500">good amount</em> of
            experience with
          </span>
          <div className="flex gap-2 text-stone-200">
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#3178C6" }}
            >
              <SiTypescript size={32}></SiTypescript>
            </span>{" "}
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#339933" }}
            >
              <SiNodedotjs size={32}></SiNodedotjs>
            </span>{" "}
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#ffffff" }}
            >
              <SiNetlify color="#38b1bb" size={32}></SiNetlify>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <span>
            I Have a <em className="text-red-700">vague amount</em> of
            experience with
          </span>
          <div className="flex gap-2 text-stone-200">
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "#f7d14a" }}
            >
              <SiPython color="#3470a2" size={32}></SiPython>
            </span>{" "}
            <span
              className="p-2 rounded-md"
              style={{ backgroundColor: "black" }}
            >
              <SiFastify color="#fafafa" size={32}></SiFastify>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
