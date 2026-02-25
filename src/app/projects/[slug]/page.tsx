import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio/index";
import styles from "./project.module.scss";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolio.personalProjects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;

  const project = portfolio.personalProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link className={styles.back} href="/">
          ← Back
        </Link>

        <header className={styles.header}>
          <h1>{project.name}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>

          <div className={styles.links}>
            {project.links.live && (
              <a href={project.links.live} target="_blank" rel="noreferrer">
                Live
              </a>
            )}

            {project.links.demo && (
              <div className={styles.tooltipWrapper}>
                <button className={styles.demoButton}>Demo 계정</button>

                <div className={styles.tooltip}>
                  <div>
                    <strong>ID</strong> {project.links.demo.id}
                  </div>
                  <div>
                    <strong>PW</strong> {project.links.demo.password}
                  </div>
                  {project.links.demo.note && <p>{project.links.demo.note}</p>}
                </div>
              </div>
            )}

            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}
          </div>
        </header>

        {project.role ? (
          <section className={styles.section}>
            <h2>Role</h2>
            <p>{project.role}</p>
          </section>
        ) : null}

        <section className={styles.section}>
          <h2>Stack</h2>
          <div className={styles.badges}>
            {project.stack.map((s) => (
              <span key={s} className={styles.badge}>
                {s}
              </span>
            ))}
          </div>
        </section>

        {project.highlights.length ? (
          <section className={styles.section}>
            <h2>Highlights</h2>
            <ul>
              {project.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.status === "in-progress" && project.planned?.length ? (
          <section className={styles.section}>
            <h2>Planned</h2>
            <ul>
              {project.planned.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.status === "in-progress" && project.roadmap?.length ? (
          <section className={styles.section}>
            <h2>Roadmap</h2>
            <ul>
              {project.roadmap.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </section>
        ) : null}

        {project.troubleshoots.length ? (
          <section className={styles.section}>
            <h2>Troubleshoots</h2>
            <ul className={styles.troubleshoots}>
              {project.troubleshoots.map((t) => (
                <li
                  key={`${project.slug}-${t.title}`}
                  className={styles.troubleItem}
                >
                  <h4 className={styles.troubleTitle}>{t.title}</h4>

                  <p>
                    <span className={styles.problemLabel}>Problem</span>
                    {t.problem}
                  </p>

                  <p>
                    <span className={styles.solutionLabel}>Solution</span>
                    {t.solution}
                  </p>

                  {t.result && (
                    <p>
                      <span className={styles.resultLabel}>Result</span>
                      {t.result}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  );
}
