import { ProjectThumbData } from "./src/types";

const DATA: Array<ProjectThumbData> = [
  {
    title: "Album coverify",
    description:
      "Site to replicate various album covers. While the code behind making the covers is simple, Abstracting common logic required a lot of learning, I had to learn some weird architectural patterns. After a major rewrite, the code is now way cleaner and available on github.",
    thumbnail: "/album-coverify.png",
    url: "https://album-coverify.vercel.app",
    size: "medium-large",
    technologies: ["React", "Next.js", "Tailwind", "Typescript"],
  },
  {
    title: "Cuándo llega roca",
    description: `A website to get easier access to a huge train timetable. Used the next pages/api folder for the backend. Main goal was performance and ease of use and I think I succeeded at it.`,
    thumbnail: "/cuando-llega.png",
    url: "https://cuando-llega-roca.vercel.app",
    size: "medium",
    technologies: ["React", "Next.js", "Sass"],
  },
  {
    title: "Pokédex",
    description: `My first project using an API, it uses a public pokémon API called pokeapi to gather various stats. I learned about fetching data and, since most endpoints have too much data, this project made me interested in learning next.js.`,
    thumbnail: "/pokedex.png",
    url: "https://pokemon-something.netlify.app",
    size: "medium",

    technologies: ["React", "Typescript", "Tailwind", "React-router"],
  },
  {
    title: "Clocks app",
    description: `A simple app with a timer and stopwatch, learned about useEffect and really enjoyed working with this type of design.`,
    thumbnail: "/clocks.png",
    url: "https://yeah-clocks.netlify.app",
    size: "small-medium",

    technologies: ["React", "React-router"],
  },
  {
    title: "Country flags game",
    description: `A game that consists in matching flags with country names. The logic is actually a bit complex, so I took the opportunity and learned to use custom hooks.`,
    thumbnail: "/country-game.png",
    url: "https://guess-the-country-flag.netlify.app",
    size: "small-medium",
    technologies: ["React", "Next.js", "Sass"],
  },
];

export default DATA;
