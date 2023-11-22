import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import TeenyiconsrightSolid from "../components/TeenyiconsrightSolid";
import Container from "../components/Container";
import SectionCard from "../components/SectionCard";
import styles from "./HomePageDesign1.module.css";

const HomePageDesign1 = () => {
  const navigate = useNavigate();

  const onMaterialSymbolshomePinClick = useCallback(() => {
    navigate("/home-page-design1");
  }, [navigate]);

  const onAboutClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.homePageDesign}>
      <img
        className={styles.materialSymbolshomePinIcon}
        alt=""
        src="/materialsymbolshomepin.svg"
        onClick={onMaterialSymbolshomePinClick}
      />
      <div className={styles.homePageDesignInner}>
        <button className={styles.frameChild} />
      </div>
      <Footer />
      <img className={styles.image3Icon} alt="" src="/image-31@2x.png" />
      <img
        className={styles.teenyiconsleftSolid}
        alt=""
        src="/teenyiconsleftsolid.svg"
      />
      <TeenyiconsrightSolid />
      <Container
        rectangleDivLeft="24px"
        rectangleDivWidth="759px"
        kDownloadsLeft="28px"
        propLeft="84px"
        propLeft1="551px"
        propLeft2="59px"
        propLeft3="83px"
        propLeft4="535px"
        propLeft5="546px"
        propLeft6="295px"
      />
      <SectionCard />
      <div className={styles.aboutParent}>
        <button className={styles.about} onClick={onAboutClick}>
          About
        </button>
        <button className={styles.about}>Contact Us</button>
        <button className={styles.about}>Timetable</button>
        <button className={styles.about}>Live Location</button>
      </div>
      <b className={styles.signIn}>Sign In</b>
    </div>
  );
};

export default HomePageDesign1;
