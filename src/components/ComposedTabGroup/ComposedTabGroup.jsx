/* eslint-disable react/prop-types */
import clsx from "clsx";
import { Children, cloneElement, useState } from "react";

import styles from "./ComposedTabGroup.module.scss";

export const ComposedTabGroup = ({ children }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabSelect = (e) => {
    const { id } = e.target;
    setActiveTab(id);
  };

  const getTabStyles = (tab) => {
    return clsx([styles.tab, activeTab == tab && styles.activeTab]);
  };

  return (
    <>
      <ul className={styles.tabContainer}>
        {Children.map(children, (child, index) => {
          const Element = child.props.icon;
          return (
            <li
              id={index}
              onClick={handleTabSelect}
              className={getTabStyles(index)}
            >
              {child.props.title}
              {child.props.icon && <Element />}
              {child.props.Icon && child.props.Icon}
            </li>
          );
        })}
      </ul>
      {Children.map(children, (Child, index) => {
        return (
          activeTab == index &&
          cloneElement(Child, { totalTabs: children.length })
        );
      })}
    </>
  );
};
