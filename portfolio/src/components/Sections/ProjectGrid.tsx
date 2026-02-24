"use client";

import Link from "next/link";
import styles from "./ProjectGrid.module.scss";
import { portfolio } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function PersonalProjects() {
  const reduce = useReducedMotion();

  const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const container: Variants = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: EASE_OUT,
        staggerChildren: 0.06,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: EASE_OUT },
    },
  };

  return (
    <section className={styles.section} id="projects">
      <header className={styles.header}>
        <h2>Personal Projects</h2>
        <p>개인 프로젝트를 소개합니다.</p>
      </header>

      <motion.div
        className={styles.grid}
        variants={container}
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, amount: 0.2 }}
      >
        {portfolio.personalProjects.map((p) => (
          <motion.div key={p.slug} variants={item}>
            <motion.div
              whileHover={reduce ? undefined : { y: -4 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={styles.cardMotion}
            >
              <Link
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
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
