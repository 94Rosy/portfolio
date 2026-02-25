"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Experience.module.scss";
import { experience } from "@/data/portfolio/experience";

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(
    experience[0]?.id ?? null,
  );
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const openAndScroll = (id: string) => {
    setOpenId((prev) => {
      const next = prev === id ? null : id;

      if (next) {
        requestAnimationFrame(() => {
          const el = refs.current[next];
          if (!el) return;
          const y = el.getBoundingClientRect().top + window.scrollY - 16;
          window.scrollTo({ top: y, behavior: "smooth" });
        });
      }
      return next;
    });
  };

  return (
    <section className={styles.section} id="experience">
      <header className={styles.header}>
        <h2>Professional Experience</h2>
        <p>회사별 수행 프로젝트를 소개합니다.</p>
      </header>

      <div className={styles.list}>
        {experience.map((c) => {
          const isOpen = openId === c.id;

          return (
            <div
              key={c.id}
              className={styles.company}
              ref={(node) => {
                refs.current[c.id] = node;
              }}
            >
              <button
                type="button"
                className={`${styles.summary} ${isOpen ? styles.open : ""}`}
                onClick={() => openAndScroll(c.id)}
              >
                <div className={styles.left}>
                  <h3 className={styles.companyName}>{c.company}</h3>
                  <p className={styles.companyMeta}>
                    {c.title} · {c.period}
                    {c.team ? ` · ${c.team}` : ""}
                  </p>
                </div>

                <div className={styles.right}>
                  <div className={styles.badgesTop}>
                    <span className={styles.badgeSoft}>
                      프로젝트 {c.projects.length}개
                    </span>
                    {c.projects.some((p) => p.roleTag === "PL") && (
                      <span className={styles.badgePrimary}>PL</span>
                    )}
                  </div>

                  <motion.span
                    className={styles.chev}
                    style={{ rotate: 45 }}
                    animate={{ rotate: isOpen ? 225 : 45 }}
                    aria-hidden
                  />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className={styles.content}
                    >
                      <ul className={styles.overview}>
                        {c.overviewBullets.map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>

                      <div className={styles.projects}>
                        {c.projects.map((p) => (
                          <article key={p.id} className={styles.projectCard}>
                            <div className={styles.projectHead}>
                              <h4 className={styles.projectTitle}>{p.title}</h4>

                              <div className={styles.projectMeta}>
                                <span>{p.period}</span>
                                {p.client && <span>· {p.client}</span>}
                                {p.roleTag && (
                                  <span
                                    className={`${styles.tag} ${styles.tagRole}`}
                                  >
                                    {p.roleTag}
                                  </span>
                                )}
                                {p.contribution && (
                                  <span
                                    className={`${styles.tag} ${styles.tagPercent}`}
                                  >
                                    기여 {p.contribution}
                                  </span>
                                )}
                              </div>
                            </div>

                            <p className={styles.projectSummary}>{p.summary}</p>

                            {p.highlights?.length ? (
                              <ul className={styles.projectHighlights}>
                                {p.highlights.map((h) => (
                                  <li key={h}>{h}</li>
                                ))}
                              </ul>
                            ) : null}

                            {p.tech?.length ? (
                              <div className={styles.tech}>
                                {p.tech.map((t) => (
                                  <span
                                    key={`${p.id}-${t}`}
                                    className={styles.techBadge}
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            ) : null}
                          </article>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
