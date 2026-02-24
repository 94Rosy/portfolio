"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Experience.module.scss";
import { portfolio } from "@/data/portfolio";

export default function Experience() {
  const [openId, setOpenId] = useState<string | null>(
    portfolio.experience[0]?.id ?? null,
  );

  // 카드 DOM ref 저장용
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const openAndScroll = (id: string) => {
    setOpenId((prev) => {
      const next = prev === id ? null : id;

      // 열릴 때만 스크롤
      if (next) {
        requestAnimationFrame(() => {
          const el = refs.current[next];
          if (!el) return;

          // 상단 여백(헤더/패딩 느낌) 조금 주기
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
        {portfolio.experience.map((c) => {
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
                className={styles.summary}
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
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
                                  <span className={styles.tag}>
                                    {p.roleTag}
                                  </span>
                                )}
                                {p.contribution && (
                                  <span className={styles.tag}>
                                    기여 {p.contribution}
                                  </span>
                                )}
                              </div>
                            </div>

                            <p className={styles.projectSummary}>{p.summary}</p>
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
