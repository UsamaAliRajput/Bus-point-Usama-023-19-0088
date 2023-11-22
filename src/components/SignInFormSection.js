import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignInFormSection.module.css";

const SignInFormSection = () => {
  const navigate = useNavigate();

  const onMaterialSymbolshomePinClick = useCallback(() => {
    navigate("/home-page-design");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.materialSymbolshomePinParent}>
      <img
        className={styles.materialSymbolshomePinIcon}
        alt=""
        src="/materialsymbolshomepin.svg"
        onClick={onMaterialSymbolshomePinClick}
      />
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <button className={styles.contactUs}>Contact Us</button>
      <button className={styles.timetable}>Timetable</button>
      <button className={styles.liveLocation}>Live Location</button>
      <div className={styles.rectangleWrapper}>
        <button className={styles.frameChild} />
      </div>
      <b className={styles.signIn}>Sign In</b>
    </div>
  );
};

export default SignInFormSection;
