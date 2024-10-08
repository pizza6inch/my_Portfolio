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
  nextjs,
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
    name: "Next JS",
    icon: nextjs,
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

const experiences = {
  en: [
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
  ],
  cn: [
    {
      title: "資訊工程系學士",
      company_name: "國立臺北科技大學",
      icon: ntut,
      iconBg: "#383E56",
      date: "2021年8月 - 2025年6月",
      points: [
        "通過課堂學習建立了資料結構和演算法的基礎觀念。",
        "在課堂環境中與團隊合作開發全端 Web 專案。",
        "完成了物件導向和 MVC 架構的課程，並實際製作專案。",
        "通過課堂專案和實務經驗加強了解決問題的能力。",
      ],
    },
    {
      title: "前端實習生",
      company_name: "EZTravel",
      icon: eztravel,
      iconBg: "#E6DEDD",
      date: "2024年7月 - 現在",
      points: [
        "使用 React 開發和維護，並通過 Redux 有效管理狀態。",
        "實現響應式設計，確保跨瀏覽器兼容性，以實現無縫的用戶體驗。",
        "與跨職能團隊合作，包括設計師、產品經理和開發人員，提供高質量的 Web 服務。",
        "利用 Next.js 實現 CSR 和 SSR 的混合方法，優化性能，改善用戶體驗。",
      ],
    },
  ],
};

const projects = [
  {
    name: "PizzaFlix",
    description: {
      en: "Web application that enables users to search the most up-to-date movie/tv show information, also user can add their favorite movies to their favorites and comment on it.",
      cn: "一個neflix clone，使用者可以透過網站搜索最新的電影/電視節目訊息，也可以將喜歡的電影添加到收藏夾並對其進行評論。",
    },

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
    description: {
      en: "A personal portfolio website that showcases my projects, skills, and experiences.technologies including threejs 3D model and some motion animation.",
      cn: "個人網站，展示了我的作品集、技能和經驗。其中技術包括 threejs 3D 模型和一些動畫。",
    },
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
