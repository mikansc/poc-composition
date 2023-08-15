import clsx from "clsx";
import { useState } from "react";
import styles from "./TabGroup.module.scss";

export const TabGroup = () => {
  const [activeTab, setActiveTab] = useState("tab-0");

  const handleTabSelect = (e) => {
    const { id } = e.target;
    setActiveTab(id);
  };

  const getTabStyles = (tab) => {
    return clsx([styles.tab, activeTab === tab && styles.activeTab]);
  };

  return (
    <section className={styles.container}>
      <ul className={styles.tabContainer}>
        <li
          id="tab-0"
          onClick={handleTabSelect}
          className={getTabStyles("tab-0")}
        >
          Tab 1
        </li>
        <li
          id="tab-1"
          onClick={handleTabSelect}
          className={getTabStyles("tab-1")}
        >
          Tab 2
        </li>
        <li
          id="tab-2"
          onClick={handleTabSelect}
          className={getTabStyles("tab-2")}
        >
          Tab 3
        </li>
      </ul>
      {activeTab === "tab-0" && (
        <div className={styles.tabContent}>
          <h1>Conteúdo Tab 1</h1>
        </div>
      )}
      {activeTab === "tab-1" && (
        <div className={styles.tabContent}>
          <h1>Conteúdo Tab 2</h1>
        </div>
      )}
      {activeTab === "tab-2" && (
        <div className={styles.tabContent}>
          <h1>Conteúdo Tab 3</h1>
        </div>
      )}
    </section>
  );
};
