import styles from './mobileNav.module.css';
import Image from 'next/image';

const MobileNav = ({ price, display }) => {
  return (
    <div
      style={display ? { display: 'flex' } : { display: 'none' }}
      className={styles.mobilenav}
    >
      <div className={styles.container}>
        <div className={styles.parent}>
          <a className={styles.btn}>home</a>
          <a className={styles.btn}>store</a>
          <a className={styles.btn}>vip</a>
          <div className={styles.waxCoin} aria-label="Waxm coin price">
            <div className={styles.logo}>
              <Image src="/token.png" alt="token" layout="fill" />
            </div>
            <a
              href="https://rally.io/creator/WAXM/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.price}
              title="$WAXM Coin Price"
            >
              ${price}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
