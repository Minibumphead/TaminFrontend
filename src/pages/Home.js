import FeatureHome from "../components/FeatureHome";
import Feature from "../components/Feature";
import Faq from "../components/Faq";
import Award from "../components/Award";

import FastIcon from "../icons/fast.svg";
import RibbonIcon from "../icons/ribbon.svg";
import SupportIcon from "../icons/support.svg";
import SafeIcon from "../icons/safe.svg";
import MedalIcon from "../icons/medal.svg";
import ISOIcon from "../icons/iso.svg";

import styles from "./Home.module.css";

const Home = () => {
  return (
    <>
      <FeatureHome />
      <Feature
        icon={FastIcon}
        title="Get your policy instantly"
      >
        Our advanced process automatically issues your policy as soon as you purchase it. Any day, any time. Even on holidays.
      </Feature>
      <Feature
        icon={RibbonIcon}
        title="No comparisons, only the best"
      >
        Comparisons often leave it upto you to figure out what is better. We do the work and provide you only with the best option at a great price.
      </Feature>
      <Feature
        icon={SupportIcon}
        title="Superfast claims and support"
      >
        We settle most claims within 1 business day. Experience superfast support like you've never seen before from an insurance company.
      </Feature>
      <Feature
        icon={SafeIcon}
        title="Trusted and safe"
      >
        We are an Omani insurance provider fully certified and regulated by CMA Oman. We are an ISO 9001 certified company with partnerships with the biggest insurance companies in Oman. We use secure technologies to ensure your payments are safe.
      </Feature>
      <Faq />
      <div className={styles.container}>
        <h2>Awards</h2>
        <div className={styles.awards}>
          <Award 
            icon={MedalIcon}
            label="2019 Asia Insurance Awards Winner"
          />
          <Award 
            icon={MedalIcon}
            label="2019 MENA Insurance Awards Winner"
          />
          <Award 
            icon={ISOIcon}
            label="An ISO 9001:2016 certified company"
          />
        </div>
      </div>
    </>
  );
}

export default Home;