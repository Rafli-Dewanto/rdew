export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Dishcovery Recipe App",
    techs: ["ReactJS (NextJS)", "react-hook-forms", "zod"],
    link: "https://github.com/Rafli-Dewanto/Dishcovery",
    isComingSoon: true,
  },
  {
    title: "LPUG Site",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://github.com/Rafli-Dewanto/LPUG",
    isComingSoon: true,
  },
  {
    title: "FlixTix",
    techs: ["ReactJS", "TypeScript", "Jotai"],
    link: "https://flixtix.vercel.app/",
    isComingSoon: false,
  },
  {
    title: "Linktree Clone",
    techs: ["ReactJS (NextJS)", "JavaScript", "TailwindCSS"],
    link: "https://rdew.vercel.app",
    isComingSoon: false,
  },
];

export default projects;
