import styles from "./Skills.module.scss";
import { skills } from "@/data/portfolio/skills";

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <header className={styles.header}>
        <h2>Skills</h2>
        <p>프로젝트를 통해 다뤄온 기술과, 확장해가고 있는 스택입니다.</p>
      </header>

      <div className={styles.groups}>
        {skills.map((g) => (
          <div key={g.title} className={styles.group} data-skill={g.title}>
            <h3>{g.title}</h3>
            <div className={styles.items}>
              {g.items.map((s) => (
                <span key={s} className={styles.badge}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
