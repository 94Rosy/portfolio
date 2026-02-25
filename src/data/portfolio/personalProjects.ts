import type { PersonalProject } from "./types";

export const personalProjects: PersonalProject[] = [
  {
    status: "completed",
    slug: "emotionlog",
    name: "EmotionLog",
    subtitle:
      "감정을 기록하고, 시각화하고, 스스로를 이해하기 위한 감정 일기 웹 플랫폼",
    role: "Solo Frontend (기획~배포 전체 과정)",
    stack: [
      "React",
      "TypeScript",
      "SCSS",
      "Redux Toolkit",
      "React Router DOM v7",
      "Material UI v6",
      "React Calendar",
      "Recharts",
      "d3",
      "d3-cloud",
      "Supabase (Auth/DB/RLS/Edge Function)",
      "date-fns",
      "ESLint",
      "Prettier",
      "Supabase CLI",
      "Docker (WSL2 환경 구성)",
      "Vercel",
    ],
    highlights: [
      "하루 1회 감정 기록 정책 기반 CRUD/UX 설계(작성→수정/삭제/조회 흐름 정리)",
      "기간(1주/1달/3달/6달) + 태그 + 날짜(캘린더) 필터 조합 조회, 페이지네이션 UX 유지(Redux로 상태 보존)",
      "도넛 차트(감정 비율)·요일 분석·최대/최소 비교·워드클라우드(d3-cloud)로 감정 패턴 시각화 + 인사이트 메시지 출력",
      "회원가입/로그인/비밀번호 재설정/이메일 인증, 인증 기반 라우팅 가드 및 권한(테스트 계정 읽기 전용) 정책 적용",
      "회원탈퇴 Soft Delete(deleted_at) + 6개월 후 개인정보 삭제를 Edge Function 예약 로직으로 설계",
      "배포 운영(Vercel) 및 환경변수 노출 대응 + Git 히스토리 정리(BFG Repo-Cleaner)",
      "감성적인 UI/UX (오늘의 감정에 따라 테마와 컬러 자동 변화)",
    ],
    troubleshoots: [
      {
        title: "테스트 계정 ‘읽기 전용’ 정책 구현",
        problem:
          "서비스 체험용 계정은 조회 기능만 제공해야 했고, 등록/수정/삭제/테마 변경/탈퇴는 제한이 필요했음",
        solution:
          "UI에서 제한 안내(Snackbar) + 라우팅/액션 레벨에서 제한 처리, Supabase RLS로 데이터 접근 권한을 최종적으로 방어",
        result:
          "가이드용 계정으로 전체 흐름을 안전하게 체험 가능, 데이터 손상 위험 제거",
      },
      {
        title: "테마 전환 깜빡임 개선",
        problem:
          "새로고침/초기 진입 시 데이터 로딩 타이밍과 테마 적용 타이밍이 엇갈려 화면이 순간적으로 어색하게 바뀜",
        solution:
          "로딩 상태를 분리하고, 데이터 로딩 완료 후 300ms 지연 뒤 테마 적용 + sessionStorage로 테마 상태 복원",
        result: "초기 진입 UX 안정화, 감성적인 전환 유지",
      },
      {
        title: "대시보드 필터 변경 시 상태 꼬임 방지",
        problem:
          "기간/태그/페이지네이션 상태가 분산되면 화면 이동/뒤로가기에서 사용자가 보던 상태가 유지되지 않음",
        solution:
          "Redux Toolkit으로 필터/페이지네이션/유저 상태를 통합 관리하고, 화면 진입 시 초기화 규칙을 명확히 정의",
        result: "조회 UX 일관성 확보, 사용자가 탐색하던 맥락 유지",
      },
    ],
    links: {
      github: "https://github.com/94Rosy/myDiary2025",
      demo: {
        id: "test@emolog.com",
        password: "qwe123qwe123!",
        note: "테스트 계정은 탈퇴할 수 없습니다.",
      },
      live: "https://my-diary2025-8afm.vercel.app",
    },
  },

  {
    status: "in-progress",
    slug: "musiclens",
    name: "MusicLens",
    subtitle:
      "분위기와 키워드를 기반으로 음악을 탐색하고 저장할 수 있는 AI 음악 발견 플랫폼",
    role: "Frontend",
    stack: [
      "Next.js(App Router)",
      "TypeScript",
      "Tailwind CSS v4",
      "shadcn/ui (Radix UI)",
      "useSyncExternalStore",
    ],
    planned: [
      "Vitest + React Testing Library",
      "OpenAI API",
      "YouTube Data API",
    ],
    highlights: [
      "localStorage 기반 saved store(useSyncExternalStore) 구조 설계",
      "Saved 페이지 구현 및 저장 UX 정리",
    ],
    roadmap: [
      "AI 기반 키워드 분석 및 추천 로직(OpenAI)",
      "YouTube Data API 연동으로 재생 경험 확장",
      "Vitest 기반 핵심 로직 단위 테스트 도입",
    ],
    troubleshoots: [],
    links: { github: "https://github.com/94Rosy/music" },
  },

  {
    status: "completed",
    slug: "portfolio-v2",
    name: "Portfolio v2",
    subtitle:
      "App Router 기반 구조 설계와 상태 기반 UI 전략을 적용한 제품형 포트폴리오 웹 애플리케이션",
    role: "Frontend Architecture & UI System Design",
    stack: [
      "Next.js (App Router)",
      "TypeScript",
      "SCSS Modules",
      "Framer Motion",
    ],
    highlights: [
      "App Router 기반 폴더 구조 설계 및 데이터/타입/표시 로직 분리",
      "프로젝트 상태(completed / in-progress) 기반 조건부 렌더링 전략 설계",
      "회사/개인 프로젝트 데이터 구조를 타입 기반으로 분리하여 확장성 확보",
      "Framer Motion을 활용한 아코디언 인터랙션 및 자연스러운 트랜지션 구현",
      "디자인 토큰(컬러/보더/라디우스) 기반 일관된 UI 시스템 구성",
      "툴팁, 뱃지, 상태 라벨 등 재사용 가능한 UI 패턴 정의",
    ],
    troubleshoots: [
      {
        title: "프로젝트 상태 기반 UI 분기 설계",
        problem:
          "작업중 프로젝트와 완료 프로젝트의 표시 정보가 달라 중복 로직과 조건문이 복잡해질 가능성이 있었음",
        solution:
          "status 필드를 기준으로 planned/roadmap/highlights 표시를 조건부 분기하여 UI 구조를 명확히 분리",
        result: "확장 가능한 프로젝트 스키마 구조 확보 및 유지보수성 향상",
      },
      {
        title: "아코디언 확장 시 스크롤 위치 문제",
        problem:
          "회사 카드 확장 시 화면 위치가 자연스럽지 않고 사용자 맥락이 깨지는 문제 발생",
        solution:
          "requestAnimationFrame과 DOM ref를 활용해 확장 시 해당 카드 위치로 부드럽게 스크롤 이동 구현",
        result: "사용자 시선 흐름 유지 및 인터랙션 완성도 향상",
      },
    ],
    links: {
      github: "https://github.com/94Rosy/portfolio",
    },
  },
];
