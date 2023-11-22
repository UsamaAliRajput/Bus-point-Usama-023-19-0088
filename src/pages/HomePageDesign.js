import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Container from "../components/Container";
import PinpointSecurityContainer from "../components/PinpointSecurityContainer";
import styles from "./HomePageDesign.module.css";

const HomePageDesign = () => {
  const navigate = useNavigate();

  const onMaterialSymbolshomePinClick = useCallback(() => {
    navigate("/home-page-design");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTeenyiconsleftSolidClick = useCallback(() => {
    navigate("/home-page-design");
  }, [navigate]);

  return (
    <div className={styles.homePageDesign}>
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
      <button className={styles.homePageDesignInner}>
        <div className={styles.frameChild} />
      </button>
      <b className={styles.signIn}>Sign In</b>
      <Footer />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <img
        className={styles.teenyiconsleftSolid}
        alt=""
        src="/teenyiconsleftsolid.svg"
        onClick={onTeenyiconsleftSolidClick}
      />
      <img
        className={styles.teenyiconsrightSolid}
        alt=""
        src="/teenyiconsrightsolid.svg"
      />
      <Container />
      <PinpointSecurityContainer />
    </div>
  );
};

export default HomePageDesign;
