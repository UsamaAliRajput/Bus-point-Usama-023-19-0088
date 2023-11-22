import { useMemo } from "react";
import GroupComponent from "./GroupComponent";
import styles from "./Container.module.css";

const Container = ({
  rectangleDivLeft,
  rectangleDivWidth,
  kDownloadsLeft,
  propLeft,
  propLeft1,
  propLeft2,
  propLeft3,
  propLeft4,
  propLeft5,
  propLeft6,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: rectangleDivLeft,
      width: rectangleDivWidth,
    };
  }, [rectangleDivLeft, rectangleDivWidth]);

  const theFastPinpointContainerStyle = useMemo(() => {
    return {
      left: kDownloadsLeft,
    };
  }, [kDownloadsLeft]);

  const pinpointIsTheStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const groupButtonStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const rectangleDivStyle = useMemo(() => {
    return {
      left: propLeft2,
    };
  }, [propLeft2]);

  const usersStyle = useMemo(() => {
    return {
      left: propLeft3,
    };
  }, [propLeft3]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      left: propLeft4,
    };
  }, [propLeft4]);

  const kDownloadsStyle = useMemo(() => {
    return {
      left: propLeft5,
    };
  }, [propLeft5]);

  const groupDivStyle = useMemo(() => {
    return {
      left: propLeft6,
    };
  }, [propLeft6]);

  return (
    <div
      className={styles.theFastPinpointGetStartedParent}
      style={frameDivStyle}
    >
      <b
        className={styles.theFastPinpointContainer}
        style={theFastPinpointContainerStyle}
      >
        <p className={styles.theFastPinpoint}>{`The Fast Pinpoint `}</p>
        <p className={styles.getStarted}>{`Get Started ->`}</p>
        <p className={styles.theFastPinpoint}>{`Tracking & Reservation.`}</p>
      </b>
      <div className={styles.pinpointIsThe} style={pinpointIsTheStyle}>
        Pinpoint is the fastest tracking and reservation software solution for
        personal and enterprise vehicles for institutes, offices and companies
        with live tracking, history recording, estimated arrival time and usage
        report generation and much more features
      </div>
      <GroupComponent propLeft="534px" propDisplay="inline-block" />
      <div className={styles.frameChild} style={rectangleDivStyle} />
      <div className={styles.users} style={usersStyle}>
        5000 Users
      </div>
      <div className={styles.frameItem} style={rectangleDiv1Style} />
      <div className={styles.kDownloads} style={kDownloadsStyle}>
        10k+ Downloads
      </div>
      <div className={styles.rectangleParent} style={groupDivStyle}>
        <div className={styles.groupChild} />
        <div className={styles.trustedClients}>10 Trusted Clients</div>
      </div>
    </div>
  );
};

export default Container;
