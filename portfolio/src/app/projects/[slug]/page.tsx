import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolio } from "@/data/portfolio";
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
            {project.links.github ? (
              <a href={project.links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : null}
            {project.links.demo ? (
              <a href={project.links.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
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

        {project.troubleshoots.length ? (
          <section className={styles.section}>
            <h2>Troubleshooting</h2>
            <ul>
              {project.troubleshoots.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </main>
  );
}
