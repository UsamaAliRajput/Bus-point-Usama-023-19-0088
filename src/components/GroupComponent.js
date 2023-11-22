import { useMemo } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ propLeft, propDisplay }) => {
  const groupButtonStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const getStartedContainerStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <button className={styles.ellipseParent} style={groupButtonStyle}>
      <div className={styles.componentChild} />
      <b
        className={styles.getStartedContainer}
        style={getStartedContainerStyle}
      >
        <p className={styles.get}>Get</p>
        <p className={styles.get}>{`Started -> `}</p>
      </b>
    </button>
  );
};

export default GroupComponent;
