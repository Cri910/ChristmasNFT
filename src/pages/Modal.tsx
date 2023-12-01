import { FunctionComponent, useCallback } from "react";
import styles from "./Modal.module.css";

const Modal: FunctionComponent = () => {
  const onButtonContainer1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='payMethodCreateWallet']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonContainer6Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='payMethodDefaultContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modalChild} />
      <div className={styles.payMethod}>
        <div
          className={styles.payMethoddefault}
          data-scroll-to="payMethodDefaultContainer"
        >
          <div className={styles.payMethoddefaultChild} />
          <b className={styles.creaOConnetti}>Crea o connetti wallet</b>
          <div className={styles.tabs}>
            <div className={styles.tabsItemHorizontal}>
              <div className={styles.logIn}>Crypto</div>
              <div className={styles.activeIndicator} />
            </div>
            <div className={styles.tabsItemHorizontal1}>
              <div className={styles.logIn}>Credit Card</div>
              <div className={styles.activeIndicator1} />
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.label}>{`CONNETTI WALLET      `}</div>
          </div>
          <div className={styles.button1} onClick={onButtonContainer1Click}>
            <div className={styles.label}>CREA IL TUO WALLET</div>
          </div>
        </div>
        <div
          className={styles.payMethodcreateWallet}
          data-scroll-to="payMethodCreateWallet"
        >
          <div className={styles.payMethodcreateWalletChild} />
          <b className={styles.creaIlTuo}>Crea il tuo wallet</b>
          <div className={styles.addressParent}>
            <div className={styles.address}>
              <div className={styles.chiavePubblica}>Chiave pubblica</div>
              <div className={styles.field}>
                <div className={styles.textGoesHere}>Your phone number</div>
              </div>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </div>
            <div className={styles.privateKey}>
              <div className={styles.chiavePrivata}>Chiave privata</div>
              <div className={styles.field1}>
                <div className={styles.textGoesHere}>name@example.com</div>
              </div>
              <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
            </div>
          </div>
          <div className={styles.tabs1}>
            <div className={styles.tabsItemHorizontal}>
              <div className={styles.logIn}>Crypto</div>
              <div className={styles.activeIndicator} />
            </div>
            <div className={styles.tabsItemHorizontal1}>
              <div className={styles.logIn}>Credit Card</div>
              <div className={styles.activeIndicator1} />
            </div>
          </div>
          <div className={styles.button2}>
            <div className={styles.label}>
              Scarica le informazioni del tuo wallet
            </div>
          </div>
          <div className={styles.button3}>
            <div className={styles.label}>{`CONNETTI WALLET      `}</div>
          </div>
        </div>
        <div className={styles.pagaConCarta}>
          <div className={styles.payMethodcreditCard}>
            <div className={styles.payMethodcreateWalletChild} />
            <b className={styles.pagaConCarta1}>Paga con carta</b>
            <div className={styles.tabs2}>
              <div className={styles.tabsItemHorizontal}>
                <div className={styles.logIn}>Crypto</div>
                <div className={styles.activeIndicator1} />
              </div>
              <div className={styles.tabsItemHorizontal5}>
                <div className={styles.logIn}>Credit Card</div>
                <div className={styles.activeIndicator} />
              </div>
            </div>
            <div className={styles.phoneParent}>
              <div className={styles.phone}>
                <div className={styles.label}>Numero carta</div>
                <div className={styles.field2}>
                  <div className={styles.textGoesHere}>08212345671</div>
                </div>
              </div>
              <div className={styles.scadenzaParent}>
                <div className={styles.scadenza}>Scadenza</div>
                <div className={styles.field3}>
                  <div className={styles.textGoesHere}>Rachel</div>
                </div>
                <div className={styles.cvc}>
                  <div className={styles.label}>CVC</div>
                  <div className={styles.field4}>
                    <div className={styles.textGoesHere}>Green</div>
                  </div>
                </div>
                <div className={styles.mmyyyy}>MM/YYYY</div>
                <div className={styles.div}>000</div>
              </div>
            </div>
            <div className={styles.cardName}>
              <div className={styles.label}>Nome sulla carta</div>
              <div className={styles.field2}>
                <div className={styles.textGoesHere}>rachelgreen@gmail.com</div>
              </div>
            </div>
            <div className={styles.phone1}>
              <div className={styles.chiavePrivata}>{`E-mail `}</div>
              <div className={styles.field6}>
                <div className={styles.textGoesHere}>Your phone number</div>
              </div>
            </div>
            <div className={styles.button4}>
              <div className={styles.label}>ACQUISTA</div>
            </div>
          </div>
        </div>
        <div className={styles.payMethodunselectedtruelab}>
          <div className={styles.checkbox}>
            <div className={styles.baseCheckbox}>
              <div className={styles.check} />
              <div className={styles.mixed} />
            </div>
          </div>
          <div className={styles.label}>Lorem Ipsum</div>
        </div>
        <div className={styles.payMethodselectedtruelabel}>
          <div className={styles.checkbox}>
            <div className={styles.baseCheckbox1}>
              <div className={styles.check1} />
              <div className={styles.mixed} />
            </div>
          </div>
          <div className={styles.label}>Lorem Ipsum</div>
        </div>
        <div className={styles.payMethoddefault1}>
          <div className={styles.payMethoddefaultItem} />
          <b className={styles.scegliIlMetodo}>Scegli il metodo di pagamento</b>
          <div className={styles.tabs}>
            <div className={styles.tabsItemHorizontal6}>
              <div className={styles.logIn}>Crypto</div>
              <div className={styles.activeIndicator} />
            </div>
            <div className={styles.tabsItemHorizontal7}>
              <div className={styles.logIn}>Credit Card</div>
              <div className={styles.activeIndicator1} />
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.label}>CARTE DI CREDITO</div>
          </div>
          <div className={styles.button1} onClick={onButtonContainer6Click}>
            <div className={styles.label}>CRIPTOVALUTA</div>
          </div>
        </div>
      </div>
      <div className={styles.phone2}>
        <div className={styles.label}>Chiave pubblica</div>
        <div className={styles.field7}>
          <div className={styles.textGoesHere}>08212345671</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
