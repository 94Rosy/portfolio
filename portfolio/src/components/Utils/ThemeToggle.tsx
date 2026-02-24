import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("./ThemeToggleClient"), {
  ssr: false,
});

export default ThemeToggle;
