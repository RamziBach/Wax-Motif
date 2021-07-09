import { useState, useEffect } from 'react';
import Image from 'next/image';
import MobileNav from '../mobile_nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './header.module.css';

const Header = ({ price }) => {
  const [isMobileDisplayOpen, setIsMobileDisplayOpen] = useState(false);

  const handleMobileClick = () =>
    setIsMobileDisplayOpen(prevState => !prevState);

  useEffect(() => {
    console.log('Website developed by Ramzi Bach - www.ramzibach.com');
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.parent}>
          <div className={styles.titleContainer}>
            <img src="/name.svg" alt="name" className={styles.title} />
            {/* <h2 className={styles.title}>wax money</h2> */}
          </div>
          <div className={styles.menuContainer}>
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
              <Image src="/token.png" alt="token" layout="fill" />
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
          <div className={styles.mobileContainer}>
            <button onClick={handleMobileClick}>
              <FontAwesomeIcon icon={faBars} className={styles.i} />
            </button>
          </div>
        </div>
      </div>
      <MobileNav price={price} display={isMobileDisplayOpen} />
    </header>
  );
};

export default Header;
