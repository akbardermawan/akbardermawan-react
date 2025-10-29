import {
  mobile,
  backend,
  creator,
  web,
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
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  CS,
  DotNet,
  Next,
  Postgre,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
    skill: ["React JS", "Tailwind CSS", "Flutter Dart", "Blazor"],
  },
  {
    title: "Backend Developer",
    icon: backend,
    skill: ["Node JS", "Next Js", "GO Echo", "ASP.Net Core"],
  },
  {
    title: "Software Engineer",
    icon: creator,
    skill: ["Postgre SQL", "Mongo DB", "Supabase", "GitHub", "Docker"],
  },
];

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
    name: "CS",
    icon: CS,
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
    name: "Next",
    icon: Next,
  },
  {
    name: "DotNet",
    icon: DotNet,
  },
  {
    name: "Postgre",
    icon: Postgre,
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

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Lorem",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Lorem",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Lorem",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Lorem",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    id: 1,
    title: "React eCommerce",
    img: "/img/9a.JPG",
    desc: "This e-commerce website functions as an intermediary between sellers and buyers, making it easier to conduct buying and selling transactions anywhere.",
    url: "https://www.youtube.com/watch?v=G9s_WS0H7hg&t=129s",
    code: "https://github.com/akbardermawan/E-ComerrceStore",
    tec: "HTML 5 | Express JS | Rect JS | Redux | Tailwind CSS | MongoDB",
  },
  {
    id: 2,
    title: "React Library",
    img: "https://images.unsplash.com/photo-1726607288637-a646ddd3814a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem aku mendadri jatri dairi  sesnsidieeri binaguang taka pedrnah nemsukan adraha hidupa dengan baandyajk penyesalan",
    url: "",
    code: "",
    tec: "",
  },
  {
    id: 3,
    title: "React Pamvlet",
    img: "https://plus.unsplash.com/premium_photo-1747290111576-07d2f5034ae1?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem aku mendadri jatri dairi  sesnsidieeri binaguang taka pedrnah nemsukan adraha hidupa dengan baandyajk penyesalan",
    url: "",
    code: "",
    tec: "",
  },
  {
    id: 4,
    title: "React Boxing Hotel",
    img: "https://images.unsplash.com/photo-1726137570619-4e6b55c17c51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem aku mendadri jatri dairi  sesnsidieeri binaguang taka pedrnah nemsukan adraha hidupa dengan baandyajk penyesalan",
    url: "",
    code: "",
    tec: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
