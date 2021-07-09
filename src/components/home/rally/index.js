import styles from './rally.module.css';

const Rally = () => {
  return (
    <div data-scroll-section>
      <section className={styles.rally}>
        <div className={styles.container}>
          <div className={styles.rallyLogoContainer}>
            <img
              src="/rallyLogo.svg"
              alt="Rally logo"
              className={styles.rallyLogo}
            />
          </div>
          <h2 className={styles.title}>
            how to buy <br /> <span>$waxm</span>
          </h2>
          {/* <div className={styles.boxContainer}> */}
          <div className={styles.parent}>
            <div className={styles.box}>
              <div
                data-scroll
                data-scroll-speed="-3"
                data-scroll-direction="horizontal"
                className={styles.boxShadow}
              ></div>
              <div className={styles.contents}>
                <h3 className={styles.subTitle}>step 1</h3>
                <p className={styles.description}>
                  Create a Rally.io account <br /> or login with your twitch
                  account.
                </p>
                <a
                  href="https://rally.io/signup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-border"
                  title="Signup at Rally.io"
                >
                  Rally.io
                </a>
              </div>
            </div>
            <div className={styles.box}>
              <div
                data-scroll
                data-scroll-speed="3"
                data-scroll-direction="horizontal"
                className={styles.boxShadow}
              ></div>
              <div className={styles.contents}>
                <h3 className={styles.subTitle}>step 2</h3>
                <p className={styles.description}>
                  Purchase $WAXM coins with USD <br /> or with RLY at Rally.io.
                </p>
                <a
                  href="https://rally.io/creator/WAXM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-border"
                  title="Buy $WAXM at Rally.io"
                >
                  Buy $WAXM
                </a>
              </div>
            </div>
            <div className={styles.box}>
              <div
                data-scroll
                data-scroll-speed="-3"
                data-scroll-direction="horizontal"
                className={styles.boxShadow}
              ></div>
              <div className={styles.contents}>
                <h3 className={styles.subTitle}>step 3</h3>
                <p className={styles.description}>
                  Hold, sell, trade <br /> or redeem for $WAXM unlocks.
                </p>
                <a className="btn-border">Store</a>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>
    </div>
  );
};

export default Rally;
