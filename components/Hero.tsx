import Link from "next/link";

const Hero = () => {
  return (
    <header className="flex items-center justify-center w-full h-screen bg-amber-100">
      <h1 className="text-center">
        <span
          // "text-7xl font-extrabold text-amber-300 drop-shadow-lg "
          className="text-6xl font-bold font-[Poppins] text-indigo-700 drop-shadow-lg shadow-black"
        >
          Augusto Errecarte
        </span>
        <div className="flex flex-col justify-center gap-4 m-5 text-xl sm:flex-row ">
          <Link
            className="p-6 transition border border-transparent rounded-lg hover:underline hover:bg-amber-200 "
            href="/projects"
          >
            See projects
          </Link>
          <Link
            className="p-6 transition border border-transparent rounded-lg hover:underline hover:bg-amber-200 "
            href="/about"
          >
            About me
          </Link>
        </div>
      </h1>
    </header>
  );
};

export default Hero;
