import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faTwitch } from '@fortawesome/free-brands-svg-icons';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div data-scroll-section>
      <footer className={styles.footer}>
        <div className={styles.parent}>
          <Image
            src="/templered.png"
            alt="temple"
            layout="intrinsic"
            width="100"
            height="100"
          />
          <div className={styles.socialsContainer}>
            <a>
              <FontAwesomeIcon icon={faSoundcloud} className={styles.i} />
            </a>
            <a>
              <FontAwesomeIcon icon={faDiscord} className={styles.i} />
            </a>
            <a>
              <FontAwesomeIcon icon={faSpotify} className={styles.i} />
            </a>
            <a>
              <FontAwesomeIcon icon={faYoutube} className={styles.i} />
            </a>
            <a>
              <FontAwesomeIcon icon={faTwitter} className={styles.i} />
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} className={styles.i} />
            </a>
            <a>
              <FontAwesomeIcon icon={faFacebook} className={styles.i} />
            </a>
            <a>
              <FontAwesomeIcon icon={faApple} className={styles.i} />
            </a>
            <a>
              <FontAwesomeIcon icon={faTwitch} className={styles.i} />
            </a>
          </div>
          <p className={styles.c}>© {new Date().getFullYear()} draze force</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
