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
            height="94.2"
          />
          <div className={styles.socialsContainer}>
            <a
              href="https://soundcloud.com/waxmotif"
              target="_blank"
              rel="noopener noreferrer"
              title="Soundcloud"
              aria-label="Soundcloud"
            >
              <FontAwesomeIcon icon={faSoundcloud} className={styles.i} />
            </a>
            <a
              href="https://discord.com/invite/SapxcWJd"
              target="_blank"
              rel="noopener noreferrer"
              title="Discord"
              aria-label="Discord"
            >
              <FontAwesomeIcon icon={faDiscord} className={styles.i} />
            </a>
            <a
              href="https://open.spotify.com/artist/7zm3aSdmGiOkTt0aZFSO8R?si=WYtSja7_QbSXMclHA11HMA&nd=1"
              target="_blank"
              rel="noopener noreferrer"
              title="Spotify"
              aria-label="Spotify"
            >
              <FontAwesomeIcon icon={faSpotify} className={styles.i} />
            </a>
            <a
              href="https://www.youtube.com/user/Waxmotif"
              target="_blank"
              rel="noopener noreferrer"
              title="Youtube"
              aria-label="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} className={styles.i} />
            </a>
            <a
              href="https://twitter.com/WaxMotif"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitter"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} className={styles.i} />
            </a>
            <a
              href="https://www.instagram.com/waxmotif"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className={styles.i} />
            </a>
            <a
              href="https://www.facebook.com/WaxMotif"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className={styles.i} />
            </a>
            <a
              href="https://music.apple.com/us/artist/wax-motif/300682465"
              target="_blank"
              rel="noopener noreferrer"
              title="Apple Music"
              aria-label="Apple Music"
            >
              <FontAwesomeIcon icon={faApple} className={styles.i} />
            </a>
            <a
              href="https://www.twitch.tv/waxmotif"
              target="_blank"
              rel="noopener noreferrer"
              title="Twitch"
              aria-label="Twitch"
            >
              <FontAwesomeIcon icon={faTwitch} className={styles.i} />
            </a>
          </div>
          <p className={styles.copyright}>
            © Copyright {new Date().getFullYear()} wax motif
          </p>
          <a
            href="https://www.dividedsoulsrecords.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Divided Souls Records"
            aria-label="Divided Souls Records"
          >
            <img src="/divided.svg" alt="divided" className={styles.divided} />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
