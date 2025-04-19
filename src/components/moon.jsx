// @ts-ignore
import styles from "./moon.module.scss";
import { useEffect, useState } from "react";

export function Moon() {
  const [isDark, setIsDark] = useState(() => {
    // 初始化状态：从 localStorage 读取或根据系统偏好设置判断
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // 每次 isDark 状态变化时，更新 html 标签上的 class
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div
      className={styles.shadow}
      onClick={() => setIsDark((prev) => !prev)}
      title="点击切换模式"
      style={{ cursor: "pointer" }}
    >
      <div className={styles.moon}>
        <div className={styles.disc} />
      </div>
    </div>
  );
}
