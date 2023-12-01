import { FunctionComponent } from "react";
import styles from "./ThankYouPage.module.css";

const ThankYouPage: FunctionComponent = () => {
  return (
    <div className={styles.thankYouPage}>
      <div className={styles.nft}>
        <img
          className={styles.neveATerra13}
          alt=""
          src="/neve-a-terra1-31@2x.png"
        />
        <img
          className={styles.neveATerra12}
          alt=""
          src="/neve-a-terra1-2@2x.png"
        />
        <img className={styles.ombraWhiteIcon} alt="" src="/ombra-white.svg" />
        <img className={styles.icon} alt="" src="/20231126-1825-1@2x.png" />
      </div>
      <img
        className={styles.neveATerra14}
        alt=""
        src="/neve-a-terra1-4@2x.png"
      />
      <div className={styles.copyright2022MoreAllRightParent}>
        <div className={styles.copyright2022More}>
          Copyright 2022 More. All right reserved.
        </div>
        <div className={styles.logoCbArt}>
          <div className={styles.logoCbArt1}>
            <img className={styles.logo1Icon} alt="" src="/logo-15@2x.png" />
            <div className={styles.chainblockArt}>
              <span>{`Chainblock `}</span>
              <span className={styles.art}>ART</span>
            </div>
          </div>
        </div>
        <img className={styles.socialIcons} alt="" src="/social-icons1.svg" />
      </div>
      <img className={styles.babboAiIcon} alt="" src="/babbo-ai@2x.png" />
      <div className={styles.sectionHero}>
        <div className={styles.nevePiccolo} />
        <div className={styles.intestazione}>
          <div className={styles.graziePerLacquistoecco}>
            Grazie per l’acquisto!Ecco il tuo NFT di Natale
          </div>
        </div>
        <div className={styles.sectionHeroChild} />
        <img
          className={styles.fiocchiDiNeve1}
          alt=""
          src="/fiocchi-di-neve-1@2x.png"
        />
      </div>
      <div className={styles.menuNav}>
        <div className={styles.nav}>
          <div className={styles.divlogo} />
          <div className={styles.divtgmenuNavbarWrap} />
          <div className={styles.list}>
            <div className={styles.item}>
              <b className={styles.linkHome}>Home</b>
            </div>
            <div className={styles.item1}>
              <b className={styles.linkHome}>Collection</b>
            </div>
            <div className={styles.item2}>
              <b className={styles.linkHome}>Choose</b>
            </div>
            <div className={styles.item3}>
              <b className={styles.linkHome}>Roadmap</b>
            </div>
            <div className={styles.item4}>
              <b className={styles.linkHome}>Artists</b>
            </div>
          </div>
        </div>
        <div className={styles.connectWalletButton}>
          <div className={styles.buttonConnectWallet} />
          <b className={styles.connectWallet}>CONNECT WALLET</b>
        </div>
        <div className={styles.logoCbArt2}>
          <div className={styles.logoCbArt1}>
            <img className={styles.logo1Icon1} alt="" src="/logo-16@2x.png" />
            <div className={styles.chainblockArt1}>
              <span>{`Chainblock `}</span>
              <span className={styles.art}>ART</span>
            </div>
          </div>
        </div>
        <div className={styles.buttonConnectWallet1}>
          <div className={styles.buttonConnectWalletChild} />
          <b className={styles.connectWallet1}>Connect wallet</b>
        </div>
        <div className={styles.logoCbArt4}>
          <div className={styles.logoCbArt1}>
            <img className={styles.logo1Icon2} alt="" src="/logo-17@2x.png" />
            <div className={styles.chainblockArt2}>
              <span>{`Chainblock `}</span>
              <span className={styles.art}>ART</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.loremIpsumDolorContainer}>
        <p
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor bibendum ipsum eu maximus. Curabitur tempor facilisis orci, luctus sodales massa mollis nec. Vestibulum facilisis tempor ipsum eu dapibus. Cras placerat tellus a iaculis ultrices. Suspendisse imperdiet justo at ultricies mattis. `}</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
