import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/loann.png";
import rmtdevImg from "@/public/tiktok.png";
import wordanalyticsImg from "@/public/hosp.png";

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
    title: "Ferno",
    location: "Harare",
    description:
      "Worked as full-stack junior developer and upskilled",
    icon: React.createElement(FaReact),
    date: "2020-2021",
  },
  {
    title: "Front-End Developer",
    location: "Avondale",
    description:
      "I worked as a part time remote front-end developer for 6 months at Touchpad technologies.",
    icon: React.createElement(CgWorkAlt),
    date: "2021-2022",
  },
  {
    title: " IT Student",
    location: "Chinhoyi University of Technology  ",
    description:
      "Responsible for designing, developing, implementing, and maintaining computer systems and networks. ",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Loan Management",
    description:
      "Created an intuitive and user-friendly interface for loan applications, loan tracking, and repayment management.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Tiktok Clone",
    description:
      "Designed and built a user-friendly interface with a focus on user engagement and interaction.",
    tags: ["Vue", "TypeScript", "Nuxt.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Hospital System",
    description:
      "Created an intuitive and user-friendly interface for patient registration, appointment scheduling, and medical record management.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
  "GraphQL",
  "Java",
  "Express",
  "PostgreSQL",
  "Python","C++","C#",
  "Framer Motion","PHP","Laravel","Docker","Kotlin"
] as const;
