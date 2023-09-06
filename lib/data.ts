import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import netflix from "@/public/netflix.png";
import expense from "@/public/expense.webp";
import portfolio from "@/public/port.png";
import uber from "@/public/uber.png";
import weather from "@/public/weather.webp";
import quiz from "@/public/GptQuiz.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer Intern",
    location: "Kolkata, India",
    description
      "Worked as an intern at Millimeter Labs Pvt Ltd. Worked on the front-end and back-end of the company ecommerce website. Took part in code reviews and performed code documentations.",
    icon: React.createElement(FaReact),
    date: "Sep,2022-Dec,2022",
  },
] as const;

export const projectsData = [
  {
    title: "Nextflix Clone",
    description:
      "Full stack Netflix Clone with Admin features and CRUD operations. Features a REST API built from scratch to provide movies and series in random.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Material-UI"],
    imageUrl: netflix,
  },
  {
    title: "GptQuiz",
    description:
      "Quiz platform for mcq and open-ended quiz built with OpenAI's API. Features include generating quiz game and analytics of performance on quiz at the end of it with time and accuracy. Also fetures history of previously generated quiz games.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Prisma"],
    imageUrl: quiz,
  },
  {
    title: "Expense Tracker",
    description:
      "An analytics website to track personal finance with graph and history. Features CRUD operations on transactions visualized with pie graph and color coded history.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    imageUrl: expense,
  },
  {
    title: "Uber Clone",
    description:
      "The Uber Clone App is a React Native-based mobile app that mimics Uber's functions. It uses Google Maps and Distance API for real-time tracking and efficient routes. The user-friendly interface is designed with React Native and Tailwind CSS. Integrating Google APIs ensures accurate navigation. This project highlights my mobile app development skills and API integration expertise.",
    tags: ["React Native", "Tailwind", "Google-location API", "Google-Distance API", "Redux"],
    imageUrl: uber,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Framer Motion",
] as const;
