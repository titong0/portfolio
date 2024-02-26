import { GitHubIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Augusto Errecarte",
  initials: "AE",
  location: "La Plata, Argentina",
  locationLink: "https://maps.app.goo.gl/wWm12PGwC9GGmqUZ9",
  about: "Passionate about learning and getting the details right.",
  summary:
    "Programming is an empowering skill, and I like using it to build the websites I want to use. Ranging from games to actually useful apps that attempt to make my life easier.",
  avatarUrl: "",
  personalWebsiteUrl: "https://augusto-errecarte.vercel.app",
  contact: {
    email: "errecarteaugusto@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/titong0",
        icon: GitHubIcon,
      },
      {
        name: "X / Twitter (spanish)",
        url: "https://x.com/titong0",
        icon: XIcon,
      },
    ],
  },
  work: [],
  education: [
    {
      school: "Escuela de Lenguas",
      degree: "Intermediate / Advanced english course",
      start: "2010",
      end: "2020",
    },
    {
      school: "My home",
      degree: "Self-teaching web development",
      start: "2020",
      end: "∞",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "MySQL/PostgreSQL",
  ],
  projects: [
    {
      title: "Riffify",
      techStack: ["TypeScript", "Next.js", "Supabase", "Radix UI"],
      description:
        "A web app to play heardle for any artist. Scrapes youtube data so it could be down at any time.",
      link: {
        label: "riffify.vercel.app",
        href: "https://riffify.vercel.app",
      },
    },
    {
      title: "Foro promedios",
      techStack: ["TypeScript", "Remix", "Drizzle", "MySQL"],
      description: "Tribute website to the old promedios forum.",
      link: {
        label: "foro-promedios.vercel.app",
        href: "https://foro-promedios.vercel.app",
      },
    },
    {
      title: "Album-coverify",
      techStack: ["TypeScript", "Next.js", "HTML canvas"],
      description: "Website to insert photos into various album covers.",
      link: {
        label: "album-coverify.vercel.app",
        href: "https://album-coverify.vercel.app",
      },
    },
    {
      title: "Cuando llega mejor",
      techStack: ["TypeScript", "Next.js 13", "Tanstack Query"],
      description:
        "Web app to see realtime location of buses in La Plata using their API.",
      link: {
        label: "micros.vercel.app",
        href: "https://micros.vercel.app/",
      },
    },
    {
      title: "Guess the country flags game",
      techStack: ["Javascript", "Next.js"],
      description: "Little game about guessing flags I made a while ago.",
      link: {
        label: "guess-the-country-flag.netlify.app/",
        href: "https://guess-the-country-flag.netlify.app//",
      },
    },
  ],
} as const;
