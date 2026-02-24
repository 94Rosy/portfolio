"use client";

import { useEffect, useState } from "react";
import styles from "./TopButton.module.scss";

export default function TopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={`${styles.btn} ${visible ? styles.show : ""}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
