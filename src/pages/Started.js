import SignInFormSection from "../components/SignInFormSection";
import Footer from "../components/Footer";
import SectionForm from "../components/SectionForm";
import styles from "./Started.module.css";

const Started = () => {
  return (
    <div className={styles.started}>
      <SignInFormSection />
      <div
        className={styles.pinpointIsTheFastestTrackiParent}
        data-scroll-to="groupContainer"
      >
        <div className={styles.pinpointIsTheContainer}>
          <p className={styles.pinpointIsThe}>
            Pinpoint is the fastest tracking and reservation software solution
            for personal and enterprise vehicles for institutes, offices and
            companies with live tracking, history recording, estimated arrival
            time and usage report generation and much more features.
          </p>
          <p className={styles.pinpointIsThe}>&nbsp;</p>
          <p className={styles.pinpointIsThe}>
            We ensure the best usage for vehicles tracking and reservation
            system security with advance encryption standards and capability of
            keeping your assets like car, points much more secure with the live
            tracking system
          </p>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.aboutPinpointWrapper}>
            <b className={styles.aboutPinpoint}>About Pinpoint</b>
          </div>
        </div>
      </div>
      <Footer />
      <div className={styles.startedChild} />
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <SectionForm />
    </div>
  );
};

export default Started;
