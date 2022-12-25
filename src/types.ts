type sizes = "small" | "medium" | "large";
export type ProjectThumbData = {
  title: string;
  thumbnail: string;
  description: string;
  size: sizes | `${sizes}-${sizes}`;
  url: string;
  technologies: Array<string>;
};
