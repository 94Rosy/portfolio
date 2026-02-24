// src/data/portfolio.ts

export type LinkItem = {
  label: string;
  href: string;
};

export type WorkProject = {
  id: string;
  title: string;
  period: string; // "2025.07 - 2025.10"
  client?: string;
  summary: string; // 1줄 요약
  highlights: string[]; // 핵심 3~6개
  tech: string[];
  contribution?: string; // "40%"
  roleTag?: string; // "PL"
};

export type CompanyExperience = {
  id: string;
  company: string;
  team?: string;
  title: string; // "선임 / Frontend Developer"
  period: string; // "2025.06 - 2026.02"
  reason?: string; // 이직 사유 (짧게)
  overviewBullets: string[]; // 담당 업무/요약 3~5개
  projects: WorkProject[];
};

export type PersonalProject = {
  slug: string; // /projects/[slug] 상세 페이지 연결용
  name: string;
  subtitle: string;
  role?: string;
  stack: string[];
  highlights: string[];
  troubleshoots: string[];
  links: {
    github?: string;
    demo?: string;
  };
};

export type SkillGroup = {
  title: string;
  items: string[];
};

// ✅ 핵심: 여기서 타입을 명시해 유니온 추론을 막는다.
export const experience: CompanyExperience[] = [
  {
    id: "dfy",
    company: "㈜DFY(DFZ)",
    team: "개발팀",
    title: "선임 / Frontend Developer",
    period: "2025.06 - 2026.02",
    reason: "경영악화로 인한 구조조정",
    overviewBullets: [
      "React 기반 Web Application 프론트엔드 개발 및 퍼블리싱 리뉴얼",
      "이커머스 서비스 전반 UI/UX 개발 및 반응형 최적화",
      "모달/옵션 팝업/액션바 등 주요 인터랙션 구현",
      "공통 컴포넌트(Actionbar, Chips, Pagination 등) 설계 및 재사용 구조화",
      "기획·디자인·개발 협업을 통한 요구사항 반영 및 일정/범위 조율",
    ],
    projects: [
      {
        id: "jins-global",
        title: "JINS 글로벌 이커머스 구축",
        period: "2025.07 - 2025.10",
        client: "JINS Eyewear",
        roleTag: "PL",
        contribution: "40%",
        summary: "글로벌 마켓 확장을 위한 신규 이커머스 구축",
        highlights: [
          "입사 3주 만에 PL 수행, 프론트엔드 리드 및 일정 관리",
          "일본 고객사 정기 화상 미팅 참여, 요구사항 분석 및 일정 조율",
          "상품 상세(PDP), 마이페이지, Footer(FAQ) 등 핵심 사용자 흐름 UI 구현",
          "공통 컴포넌트(Actionbar/Chips/Pagination) 설계 및 스타일 모듈화",
        ],
        tech: [
          "Next.js",
          "React",
          "TypeScript",
          "React-Redux",
          "Tailwind CSS",
          "CSS Modules",
          "SCSS",
          "Figma",
          "Git",
        ],
      },
      {
        id: "rejuran-renewal",
        title: "리쥬란 이커머스 퍼블리싱 리뉴얼",
        period: "2025.11 - 2026.01",
        client: "리쥬란",
        contribution: "30%",
        summary: "기존 온라인 쇼핑몰 UI/UX 개선 및 반응형 최적화",
        highlights: [
          "회원·주문·마이페이지·커뮤니티 등 핵심 사용자 흐름 UI 개선",
          "브랜드/콘텐츠 페이지 레이아웃 및 스타일 고도화",
          "Cafe24 모듈 구조 유지 기반으로 기능 안정성 유지 + UI 개선",
          "모바일·PC 대응 반응형 최적화",
        ],
        tech: ["HTML5", "CSS3", "SCSS", "Cafe24"],
      },
    ],
  },

  {
    id: "ssr",
    company: "㈜에스에스알",
    team: "R&D본부 기술연구소 개발1팀",
    title: "주임 / Frontend Developer",
    period: "2021.05 - 2025.04",
    reason: "새로운 환경에 도전",
    overviewBullets: [
      "React 기반 Web Application 프론트엔드 기능 개발 및 유지보수",
      "React-intl 기반 다국어(영/중) 서비스 구현",
      "Hotfix 릴리즈 및 버전 관리, 빌드 파일 배포(개발 서버/삼바 서버)",
      "공통 UI(테이블/트리) 개선 및 해상도별 UI 품질 개선",
    ],
    projects: [
      {
        id: "solidstep-cce",
        title: "SolidStep CCE 4.0",
        period: "2021.05 - 2025.04",
        contribution: "40%",
        summary: "CCE 취약점 진단 자동화 솔루션 UI 개발 및 확장",
        highlights: [
          "라이선스/자산 설정/진단 결과 등 핵심 업무 페이지 UI 개발",
          "다국어(React-intl) 및 공통 테이블 기능 고도화",
          "신규 기능 추가 및 기존 화면 UI/UX 개선 유지보수",
        ],
        tech: [
          "React",
          "TypeScript",
          "React-Redux",
          "Redux Toolkit",
          "React-router",
          "React-intl",
          "SCSS",
          "GitLab",
          "Jira",
          "Figma/Zeplin",
        ],
      },
      {
        id: "metieye",
        title: "Metieye 3.0",
        period: "2022.06 - 2023.09",
        roleTag: "PL",
        contribution: "40%",
        summary: "실시간 웹쉘 탐지 솔루션 UI 신규 구축 및 운영",
        highlights: [
          "Hotfix 버전 관리 및 릴리즈/배포 프로세스 운영",
          "검사·정책 관리 등 주요 기능 UI 구현 및 공통 컴포넌트 개선",
          "GS 인증 대응 UI 작업 및 검증 점수 98점 획득",
        ],
        tech: [
          "React",
          "TypeScript",
          "React-Redux",
          "Redux Toolkit",
          "React-router",
          "SCSS",
          "GitLab",
          "Jira",
          "Figma",
        ],
      },
      {
        id: "company-homepage",
        title: "회사 홈페이지 리뉴얼",
        period: "2022.12 - 2023.01",
        contribution: "100%",
        summary: "새 디자인 반영, 반응형 UI 구현 및 배포",
        highlights: [
          "반응형 UI 구현 및 시각적 요소(UI) 개선",
          "마케팅팀 요구사항 반영 및 협업 진행",
          "서버 배포 진행",
        ],
        tech: [
          "React",
          "TypeScript",
          "React-Redux",
          "Redux Toolkit",
          "SCSS",
          "GitLab",
        ],
      },
      {
        id: "solidstep-cve",
        title: "SolidStep CVE",
        period: "2021.12 - 2022.09",
        contribution: "30%",
        summary: "취약점 진단 One-Stop 관리 솔루션 UI 구현",
        highlights: [
          "진단 예약 기능 개선 및 모달 재구성(옵션 선택/필터 포함)",
          "사용자 피드백 기반 UI 개선 및 버그 수정",
        ],
        tech: [
          "React",
          "TypeScript",
          "React-Redux",
          "Redux Toolkit",
          "React-router",
          "SCSS",
          "GitLab",
          "Jira",
          "Figma",
        ],
      },
    ],
  },

  {
    id: "popsline",
    company: "㈜팝스라인",
    team: "개발팀",
    title: "매니저 / Frontend Developer",
    period: "2020.04 - 2021.02",
    reason: "기술력과 솔루션을 보유한 상장사로 이직",
    overviewBullets: [
      "React 기반 Web Application 기능 개발 및 유지보수",
      "AR 웹 컴포넌트를 활용한 상품 뷰어 UX 설계/구현",
      "AWS EC2 기반 배포 및 운영",
    ],
    projects: [
      {
        id: "webar",
        title: "webAr",
        period: "2020.05 - 2021.02",
        contribution: "100%",
        summary: "3D/AR 기반 상품 전시 웹 페이지 운영 및 개선",
        highlights: [
          "@google/model-viewer 기반 AR 기능 적용",
          "glb 파일 애니메이션 UX 중심 페이지 설계 및 구현",
          "반응형 UI 설계 및 유지보수",
          "AWS EC2 배포 및 운영",
        ],
        tech: ["React", "JavaScript", "SCSS", "AWS EC2"],
      },
      {
        id: "model-editor",
        title: "3D 모델 에디터",
        period: "2020.11 - 2021.01",
        contribution: "30%",
        summary: "glb/glTF 모델의 Texture/Material 수정 기능 제공",
        highlights: [
          "모델 로딩 Progress bar UI 구현",
          "라이브러리 분석 및 TypeScript 개발 환경 구성/적용",
        ],
        tech: ["React", "JavaScript", "TypeScript", "React-Redux", "SCSS"],
      },
    ],
  },
];

export const personalProjects: PersonalProject[] = [
  {
    slug: "emotionlog",
    name: "EmotionLog",
    subtitle: "감정 기록 · 첨부 · 수정/삭제 · 통계 대시보드",
    role: "Frontend",
    stack: [
      "React",
      "TypeScript",
      "Supabase",
      "Redux Toolkit",
      "Recharts",
      "SCSS",
    ],
    highlights: [
      "하루 1개 감정 기록 정책 기반 CRUD 설계",
      "기간/태그 기반 통계(파이 차트) 및 인사이트 메시지",
      "회원가입/로그인/로그아웃/회원탈퇴(Soft Delete) 플로우 구현",
    ],
    troubleshoots: [],
    links: {},
  },
  {
    slug: "musiclens",
    name: "MusicLens",
    subtitle: "음악 탐색/저장 중심의 Next.js 포트폴리오 프로젝트",
    role: "Frontend",
    stack: ["Next.js(App Router)", "TypeScript", "Tailwind", "shadcn/ui"],
    highlights: [
      "localStorage 기반 saved store(useSyncExternalStore) 구조 설계",
      "Saved 페이지 구현 및 저장 UX 정리",
    ],
    troubleshoots: [],
    links: {},
  },
];

export const skills: SkillGroup[] = [
  { title: "Core", items: ["React", "Next.js", "TypeScript", "Redux Toolkit"] },
  {
    title: "UI & Styling",
    items: ["SCSS", "CSS Modules", "Tailwind CSS", "Mantine", "Storybook"],
  },
  {
    title: "Tools & Testing",
    items: ["Git", "Vercel", "Supabase", "Vitest", "Playwright"],
  },
];

export const portfolio = {
  profile: {
    name: "박소영",
    title: "Frontend Developer",
    tagline: "React/Next.js 기반 UI·UX 개선과 공통 컴포넌트 설계를 좋아합니다.",
    links: {
      github: "https://github.com/여기에-깃허브",
      email: "mailto:여기에-이메일",
    },
  },
  education: {
    school: "학교명",
    note: "전공/기간 등 한 줄",
  },
  about: [
    "React/TypeScript 기반 Web Application 개발 경험",
    "이커머스 UI/UX 리뉴얼 및 반응형 최적화 경험",
    "공통 컴포넌트 설계(Actionbar/Chips/Pagination) 및 재사용 구조화",
    "PL 경험(대외 커뮤니케이션/일정 관리/요구사항 조율)",
  ],
  growth: [
    "Next.js(App Router) 프로젝트로 포트폴리오 고도화 중",
    "테스트(Vitest/Playwright)와 Storybook 기반 문서화 학습/적용 중",
    "접근성/성능/UX 개선을 계속 반복하며 개선하는 스타일",
  ],

  experience,
  personalProjects,
  skills,
};
