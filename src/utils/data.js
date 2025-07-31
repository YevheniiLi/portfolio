import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiServer } from 'react-icons/ci'
export const projectExperience = [
  {
    name: "Front-End Development",
    projects: 26,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Full-Stack Development",
    projects: 10,
    icon: CiServer,
    bg: "#EEC048",
  },
 
];

export const WhatDoIHelp = [
  "Hi, I'm Yevhenii — Frontend Developer from Ukraine, living in Girona, Spain.",
  "Certified Full Stack Developer. 2 years experience in web development. Worked with React, SCSS, UI/UX and modern web technologies. Projects in international teams and startups.",
  "Key strengths: minimalistic design, performance, clean code, attention to detail and focus on user needs."
];

export const workExp = [
  {
    place: "GoIT School",
    tenure: "Dec 2021 - Jan 2023 · 1 yr 2 mos",
    role: "Full Stack Developer",
    detail:
      "At GoIT, I contributed to EdTech projects as a Full Stack Developer, focusing on React.js, JavaScript, HTML5, CSS, SASS, Redux, GitHub and REST API. My work helped deliver practical web solutions for students and supported the company's mission to advance IT education."
  },
  {
    place: "Lentii ApS (Aarhus, Denmark)",
    tenure: "Apr 2023 - Mar 2024 · 1 yr",
    role: "Front-end Developer",
    detail:
      "I participated in the development and support of Lentii's web platform. My main tasks included building and improving user interfaces with Angular, TypeScript, Bootstrap, Tailwind CSS, and Bitbucket. I integrated REST APIs, optimized performance and regularly participated in code reviews."
  },
];

export const comments = [
  {
    name: "Joseph (Ojiofor) Chikeme",
    post: "Front-end developer",
    comment:
      "Yevhenii Lymarenko is recommended as a skilled, talented, and hard-working front-end developer with experience in Angular, RxJs, Tailwind CSS, Bootstrap, Javascript, and Typescript. He is also knowledgeable in ReactJS and is constantly seeking ways to improve his knowledge. Excellent communication skills and being a good team player are qualities that are observed in him. He comes highly recommended anytime, any day.",
    img: "./images/joseph.jpeg",
  },
  {
  autoplay: true,
  autoplaySpeed: 1800,
    comment:
      "I am delighted to recommend Yevhenii as a highly skilled and dedicated Frontend Developer. During our time working together at Lentii ApS Denmark, I had the privilege of witnessing his exceptional technical expertise and unwavering commitment to delivering outstanding results. In conclusion, I endorse Yevhenii as a Frontend Developer. His exceptional skills, unwavering dedication, and positive attitude truly set him apart as a standout professional in his field.",
    img: "./images//obianna.png",
  },
  {
    name: "Julia Novak",
    post: "Front-end developer",
    comment:
      "During our work together, Yevhenii proved to be a dedicated, responsible and hardworking person. He was always on time and available for calls whenever needed. In general, he is very friendly and welcoming so I had a nice experience working with Yevhenii on the same team.",
    img: "./images/yulia.jpeg",
  },
  {
    name: "Joseph (Ojiofor) Chikeme",
    post: "Front-end developer",
    comment:
      "Yevhenii Lymarenko is recommended as a skilled, talented, and hard-working front-end developer with experience in Angular, RxJs, Tailwind CSS, Bootstrap, Javascript, and Typescript. He is also knowledgeable in ReactJS and is constantly seeking ways to improve his knowledge. Excellent communication skills and being a good team player are qualities that are observed in him. He comes highly recommended anytime, any day.",
      img: "./images/joseph.jpeg",
    },
  {
    name: "Obinna Okoma",
    post: "UI/UX Designer",
    comment:
      "I am delighted to recommend Yevhenii as a highly skilled and dedicated Frontend Developer. During our time working together at Lentii ApS Denmark, I had the privilege of witnessing his exceptional technical expertise and unwavering commitment to delivering outstanding results. In conclusion, I endorse Yevhenii as a Frontend Developer. His exceptional skills, unwavering dedication, and positive attitude truly set him apart as a standout professional in his field.",
      img: "./images/obianna.png",
    },
  {
    name: "Julia Novak",
    post: "Front-end developer",
    comment:
      "During our work together, Yevhenii proved to be a dedicated, responsible and hardworking person. He was always on time and available for calls whenever needed. In general, he is very friendly and welcoming so I had a nice experience working with Yevhenii on the same team.",
      img: "./images/yulia.jpeg",
    },
  {
    name: "Joseph (Ojiofor) Chikeme",
    post: "Front-end developer",
    comment:
      "Yevhenii Lymarenko is recommended as a skilled, talented, and hard-working front-end developer with experience in Angular, RxJs, Tailwind CSS, Bootstrap, Javascript, and Typescript. He is also knowledgeable in ReactJS and is constantly seeking ways to improve his knowledge. Excellent communication skills and being a good team player are qualities that are observed in him. He comes highly recommended anytime, any day.",
      img: "./images/joseph.jpeg",
  },
  {
    name: "Obinna Okoma",
    post: "UI/UX Designer",
    comment:
      "I am delighted to recommend Yevhenii as a highly skilled and dedicated Frontend Developer. During our time working together at Lentii ApS Denmark, I had the privilege of witnessing his exceptional technical expertise and unwavering commitment to delivering outstanding results. In conclusion, I endorse Yevhenii as a Frontend Developer. His exceptional skills, unwavering dedication, and positive attitude truly set him apart as a standout professional in his field.",
      img: "./images/obianna.png",
  },
  {
    name: "Julia Novak",
    post: "Front-end developer",
    comment:
      "During our work together, Yevhenii proved to be a dedicated, responsible and hardworking person. He was always on time and available for calls whenever needed. In general, he is very friendly and welcoming so I had a nice experience working with Yevhenii on the same team.",
      img: "./images/yulia.jpeg",
  },
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};