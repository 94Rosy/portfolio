import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import styles from "./ProjectGrid.module.scss";

export default function ProjectGrid() {
  const projects = portfolio.personalProjects;

  return (
    <section className={styles.card}>
      <div className={styles.header}>
        <h2>Personal Projects</h2>
        <p>카드를 클릭하면 상세 페이지로 이동합니다.</p>
      </div>

      <div className={styles.grid}>
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${encodeURIComponent(p.slug)}`}
            className={styles.item}
          >
            <div className={styles.top}>
              <h3>{p.name}</h3>
              <p className={styles.subtitle}>{p.subtitle}</p>
            </div>

            <div className={styles.stack}>
              {p.stack.slice(0, 6).map((s) => (
                <span key={s} className={styles.badge}>
                  {s}
                </span>
              ))}
            </div>

            {p.role ? <p className={styles.role}>{p.role}</p> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
