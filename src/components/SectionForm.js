import styles from "./SectionForm.module.css";

const SectionForm = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleWrapper}>
        <input
          className={styles.frameChild}
          placeholder="Enter Email"
          type="text"
        />
      </div>
      <div className={styles.rectangleContainer}>
        <input
          className={styles.frameItem}
          placeholder="Enter Feedback"
          type="text"
        />
      </div>
      <button className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.submit}>SUBMIT</b>
      </button>
      <b className={styles.feedbackForm}>Feedback Form</b>
      <div className={styles.rectangleFrame}>
        <input
          className={styles.frameChild}
          placeholder="Enter contact"
          type="text"
        />
      </div>
    </div>
  );
};

export default SectionForm;
