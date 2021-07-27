import Link from 'next/link';
import Image from 'next/image';
import styles from './mobileNav.module.css';

const MobileNav = ({ price, display }) => {
  return (
    <div
      style={display ? { display: 'flex' } : { display: 'none' }}
      className={styles.mobilenav}
    >
      <div className={styles.container}>
        <div className={styles.parent}>
          <Link href="/">
            <a className={styles.btn}>home</a>
          </Link>
          <Link href="/store">
            <a className={styles.btn}>store</a>
          </Link>
          <Link href="/vip">
            <a className={styles.btn}>vip</a>
          </Link>
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
