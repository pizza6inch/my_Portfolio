import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  ntut,
  eztravel,
  pizzaFlix,
  portfolio,
} from "../assets/index";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Bachelor of Computer Science",
    company_name: "National Taipei University of Technology",
    icon: ntut,
    iconBg: "#383E56",
    date: "August 2021 - june 2025",
    points: [
      "Gained a solid foundation in data structures and algorithms through coursework.",
      "Collaborated with teams to develop full-stack web applications in classroom settings.",
      "Completed courses on object-oriented programming and MVC architecture, producing practical projects.",
      "Strengthened problem-solving skills through hands-on assignments and project work.",
    ],
  },
  {
    title: "Frontend Intern",
    company_name: "EZTravel",
    icon: eztravel,
    iconBg: "#E6DEDD",
    date: "july 2024 - present",
    points: [
      "Developed and maintained web applications using React, managing state effectively with Redux.",
      "Implemented responsive designs and ensured cross-browser compatibility for a seamless user experience.",
      "Collaborated with cross-functional teams, including designers, product managers, and developers, to deliver high-quality web services.",
      "Utilized Next.js to implement a hybrid approach of CSR and SSR, optimizing performance and improving user experience.",
    ],
  },
];

const projects = [
  {
    name: "PizzaFlix",
    description:
      "Web application that enables users to search the most up-to-date movie/tv show information, also user can add their favorite movies to their favorites and comment on it.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "MUI",
        color: "pink-text-gradient",
      },
    ],
    image: pizzaFlix,
    source_code_link: "https://github.com/pizza6inch/PizzaFlix",
    live_demo_link: "https://pizza-flix.vercel.app/",
  },
  {
    name: "Portfolio",
    description:
      "A personal portfolio website that showcases my projects, skills, and experiences.technologies including threejs 3D model and some motion animation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/pizza6inch/my_Portfolio",
  },
];

export { technologies, experiences, projects };
