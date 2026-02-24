import type { PortfolioData } from "./types";
import { experience } from "./experience";
import { personalProjects } from "./personalProjects";
import { skills } from "./skills";

export const portfolio: PortfolioData = {
  profile: {
    name: "박소영",
    title: "Frontend Developer",
    tagline:
      "기능을 넘어, 더 나은 경험을 함께 설계하는 \n 프론트엔드 개발자입니다.",
    links: {
      github: "https://github.com/94Rosy",
      email: "mailto:bbb0120@nate.com",
    },
  },
  education: {
    school1: "현대고등학교",
    school2: "삼육대학교 컴퓨터학부 소프트웨어 전공",
  },
  about: [
    "제품이 성장할 수 있는 방향을 함께 고민하는 개발자입니다.",
    "‘이렇게 바꾸면 더 좋아지지 않을까요?’라는 질문을 자연스럽게 던집니다.",
    "기획과 디자인의 맥락을 이해하며 프론트엔드 구조를 설계합니다.",
    "팀과 소통하며 기능이 아닌 가치를 만드는 과정을 즐깁니다.",
  ],
  growth: [
    "Next.js 기반으로 포트폴리오를 고도화하며 구조와 설계를 점검하고 있습니다.",
    "테스트와 Storybook을 학습하며 설명 가능한 코드를 지향합니다.",
    "접근성, 성능, UX를 반복적으로 개선하며 완성도를 높이고 있습니다.",
  ],

  experience,
  personalProjects,
  skills,
};
