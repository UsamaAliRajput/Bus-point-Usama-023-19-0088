import styles from "./PinpointSecurityContainer.module.css";

const PinpointSecurityContainer = () => {
  return (
    <div className={styles.weEnsureTheBestUsageForVParent}>
      <div className={styles.weEnsureThe}>
        We ensure the best usage for vehicles tracking and reservation system
        security with advance encryption standards and capability of keeping
        your assets like car, points much more secure with the live tracking
        system
      </div>
      <b className={styles.pinpointSecurityEnsureContainer}>
        <p className={styles.pinpointSecurity}>Pinpoint Security,</p>
        <p className={styles.pinpointSecurity}>{`ensure the best `}</p>
        <p className={styles.pinpointSecurity}>usage for the institutes</p>
      </b>
      <button className={styles.rectangleWrapper}>
        <div className={styles.frameChild} />
      </button>
      <div className={styles.getStarted}>Get Started</div>
    </div>
  );
};

export default PinpointSecurityContainer;
