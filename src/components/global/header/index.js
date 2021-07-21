import { useState, useEffect } from 'react';
import Link from 'next/link';
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
                  <Link href="/">
                    <a className={styles.navBtn}>home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/store">
                    <a className={styles.navBtn}>store</a>
                  </Link>
                </li>
                <li>
                  <Link href="/vip">
                    <a className={styles.navBtn}>vip</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.tickerContainer}>
            <img src="/templered.png" alt="token" className={styles.img} />
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
