import styles from "./Skills.module.scss";
import { portfolio } from "@/data/portfolio";

export default function Skills() {
  return (
    <section className={styles.section} id="skills">
      <header className={styles.header}>
        <h2>Skills</h2>
        <p>실무에서 사용한 스택 중심으로 정리했습니다.</p>
      </header>

      <div className={styles.groups}>
        {portfolio.skills.map((g) => (
          <div key={g.title} className={styles.group}>
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
