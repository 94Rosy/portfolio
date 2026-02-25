"use client";
import { portfolio } from "@/data/portfolio/index";
import styles from "./Sidebar.module.scss";
import ThemeToggle from "@/components/Utils/ThemeToggle";
import Image from "next/image";

export default function Sidebar() {
  const { profile, education, about, growth } = portfolio;

  return (
    <aside className={styles.sidebar}>
      <div className={styles.theme}>
        <ThemeToggle />
      </div>
      <div className={styles.profile}>
        <div className={styles.profileTop}>
          <div className={styles.avatar}>
            <Image
              src="/me.png"
              alt="박소영 프로필 사진"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className={styles.profileText}>
            <h2>{profile.name}</h2>
            <p className={styles.title}>{profile.title}</p>
          </div>
        </div>

        <p className={styles.tagline}>{profile.tagline}</p>
      </div>

      <div className={styles.links}>
        <a
          className={`${styles.btn} ${styles.github}`}
          href={profile.links.github}
          target="_blank"
        >
          GitHub
        </a>
        <a
          className={`${styles.btn} ${styles.email}`}
          href={profile.links.email}
        >
          Email
        </a>
      </div>

      <div className={styles.block}>
        <h3>학력</h3>
        <p>{education.school1}</p>
        <p className={styles.muted}>{education.school2}</p>
      </div>

      <div className={styles.block}>
        <h3>소개</h3>
        <ul>
          {about.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>

      <div className={styles.block}>
        <h3>Growth</h3>
        <ul>
          {growth.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
