import Link from "next/link";
import styles from "./PersonalProjects.module.scss";
import { portfolio } from "@/data/portfolio";

export default function PersonalProjects() {
  return (
    <section className={styles.section} id="projects">
      <header className={styles.header}>
        <h2>Personal Projects</h2>
        <p>개인 프로젝트는 상세 페이지로 연결됩니다.</p>
      </header>

      <div className={styles.grid}>
        {portfolio.personalProjects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${encodeURIComponent(p.slug)}`}
            className={styles.card}
          >
            <div className={styles.top}>
              <h3>{p.name}</h3>
              <p className={styles.subtitle}>{p.subtitle}</p>
            </div>

            <div className={styles.stack}>
              {p.stack.slice(0, 8).map((s) => (
                <span key={s} className={styles.badge}>
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
