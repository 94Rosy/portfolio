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

            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}

            {project.links.demo && (
              <div>
                <div>테스트 ID: {project.links.demo.id}</div>
                <div>PW: {project.links.demo.password}</div>
                {project.links.demo.note && <p>{project.links.demo.note}</p>}
              </div>
            )}

            {project.links.demo ? (
              <button type="button">Demo 계정 보기</button>
            ) : null}
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

        {project.troubleshoots.map((trouble) => (
          <li key={`${project.slug}-${trouble.title}`}>
            <h4>{trouble.title}</h4>
            <p>
              <strong>Problem</strong> {trouble.problem}
            </p>
            <p>
              <strong>Solution</strong> {trouble.solution}
            </p>
            {trouble.result && (
              <p>
                <strong>Result</strong> {trouble.result}
              </p>
            )}
          </li>
        ))}
      </div>
    </main>
  );
}
