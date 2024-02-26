import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Augusto Errecarte",
  initials: "AE",
  location: "La Plata, Argentina",
  locationLink: "https://maps.app.goo.gl/wWm12PGwC9GGmqUZ9",
  about: "Apasionado por aprender y perfeccionar los detalles.",
  summary:
    "Programar es una habilidad empoderante, y me gusta usarla para desarrollar los sitios web que yo mismo usaría. Desde juegos hasta aplicaciones realmente útiles que facilitan mi vida.",
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
        name: "X / Twitter (español)",
        url: "https://x.com/titong0",
        icon: XIcon,
      },
    ],
  },
  work: [],
  education: [
    {
      school: "Escuela de Lenguas",
      degree: "Curso de inglés intermedio / avanzado",
      start: "2010",
      end: "2020",
    },
    {
      school: "Mi hogar",
      degree: "Autodidacta en desarrollo web",
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
        "Una aplicación web para jugar Heardle con cualquier artista. Hace scraping de datos de YouTube, por lo que podría estar fuera de servicio en cualquier momento.",
      link: {
        label: "riffify.vercel.app",
        href: "https://riffify.vercel.app",
      },
    },
    {
      title: "Foro promedios",
      techStack: ["TypeScript", "Remix", "Drizzle", "MySQL"],
      description: "Sitio web tributo al antiguo foro de promiedos.",
      link: {
        label: "foro-promedios.vercel.app",
        href: "https://foro-promedios.vercel.app",
      },
    },
    {
      title: "Album-coverify",
      techStack: ["TypeScript", "Next.js", "HTML canvas"],
      description:
        "Sitio web para insertar fotos propias en varias portadas de álbumes.",
      link: {
        label: "album-coverify.vercel.app",
        href: "https://album-coverify.vercel.app",
      },
    },
    {
      title: "Cuando llega mejor",
      techStack: ["TypeScript", "Next.js 13", "Tanstack Query"],
      description:
        "Aplicación web para ver la ubicación en tiempo real de los colectivos en La Plata utilizando su API.",
      link: {
        label: "micros.vercel.app",
        href: "https://micros.vercel.app/",
      },
    },
    {
      title: "Juego de adivinar banderas de países",
      techStack: ["Javascript", "Next.js"],
      description: "Juego sobre adivinar banderas que hice hace un tiempo.",
      link: {
        label: "guess-the-country-flag.netlify.app/",
        href: "https://guess-the-country-flag.netlify.app//",
      },
    },
  ],
} as const;
