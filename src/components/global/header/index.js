import Image from 'next/image';
import styles from './header.module.css';

const Header = ({ price }) => {
  return (
    <div data-scroll-section>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.parent}>
            <div>
              <nav>
                <ul className={styles.menu}>
                  <li>
                    <button className={styles.navBtn}>home</button>
                  </li>
                  <li>
                    <button className={styles.navBtn}>store</button>
                  </li>
                  <li>
                    <button className={styles.navBtn}>vip</button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className={styles.tickerContainer}>
              <div className={styles.imgContainer}>
                <Image src="/token.jpg" alt="token" layout="fill" />
              </div>
              <a
                href="https://rally.io/creator/WAXM/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ticker}
              >
                ${price}
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
