import { FunctionComponent } from "react";
import styles from "./ConnectWalletDesk.module.css";

const ConnectWalletDesk: FunctionComponent = () => {
  return (
    <div className={styles.connectWalletDesk}>
      <div className={styles.connectWalletDesk1}>
        <div className={styles.metamask}>
          <img
            className={styles.walletconnectIcon}
            alt=""
            src="/walletconnect.svg"
          />
          <div className={styles.titleFont}>WalletConnect</div>
        </div>
        <div className={styles.metamaskDesk}>
          <div className={styles.metamask1}>
            <img className={styles.metamaskIcon} alt="" src="/metamask1.svg" />
            <div className={styles.titleFont1}>Metamask</div>
          </div>
          <img
            className={styles.informationCircleIcon}
            alt=""
            src="/information-circle.svg"
          />
          <div className={styles.networks}>Networks</div>
        </div>
        <div className={styles.walletconnectDesk}>
          <div className={styles.metamask1}>
            <div className={styles.titleFont2}>Coinbase wallet</div>
            <img
              className={styles.coinbaseWalletLogoBg1Icon}
              alt=""
              src="/coinbase-wallet-logo-bg-1.svg"
            />
            <img
              className={styles.coinbaseWalletLogoBg2Icon}
              alt=""
              src="/coinbase-wallet-logo-bg-2.svg"
            />
          </div>
        </div>
        <div className={styles.walletconnectDesk1}>
          <div className={styles.metamask1}>
            <div className={styles.titleFont2}>Phantom</div>
            <img
              className={styles.phantomIcon}
              alt=""
              src="/phantom-icon@2x.png"
            />
          </div>
        </div>
        <div className={styles.heading}>Connetti il wallet</div>
        <div className={styles.modalsdismissButton}>
          <img className={styles.xIcon} alt="" src="/x.svg" />
        </div>
        <div className={styles.termsOfService}>
          <div className={styles.byConnectingA}>
            By connecting a wallet, you agree to Chainblock
          </div>
          <div className={styles.termsOfService1}>Terms of Service.</div>
        </div>
        <div className={styles.button}>
          <b className={styles.buyTicket}>ACQUISTA</b>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletDesk;
