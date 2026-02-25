import Sidebar from "@/components/Sidebar/Sidebar";
import Experience from "@/components/Sections/Experience";
import ProjectGrid from "@/components/Sections/ProjectGrid";
import Skills from "@/components/Sections/Skills";
import TopButton from "@/components/Utils/TopBotton";
import styles from "./page.module.scss";

export default function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          <h1>포트폴리오</h1>
          <p>정체되지 않고 나아가고 싶은 개발자의 포트폴리오</p>
        </header>

        <div className={styles.grid}>
          <Sidebar />
          <section className={styles.main}>
            <Experience />
            <ProjectGrid />
            <Skills />
          </section>
        </div>
      </div>

      <TopButton />
    </main>
  );
}
