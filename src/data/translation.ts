export const translations = {
  en: {
    about: "About",
    research: "Research",
    publications: "Publications",
    projects: "Projects",
    interests: "Research Interests",
    education: "Education",
    awards: "Honors & Awards",
  },
  ko: {
    about: "소개",
    research: "연구",
    publications: "논문",
    projects: "프로젝트",
    interests: "연구 관심 분야",
    education: "학력",
    awards: "수상 경력",
  },
} as const;

export type Language = keyof typeof translations;