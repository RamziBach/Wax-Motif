import Image from 'next/image';
import { useSpring, animated } from 'react-spring';
import styles from './landing.module.css';

const Landing = () => {
  const calc = (x, y) => [
    x - window.innerWidth / 1.45,
    y - window.innerHeight / 2.25,
  ];
  const trans4 = (x, y) => `translate3d(${x / 6.5}px,${y / 6.5}px,0)`;
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  return (
    <div data-scroll-section>
      <section className={styles.landing}>
        <div className={styles.container}>
          <div className={styles.grandparent}>
            <div className={styles.content}>
              <div className={styles.contentImgContainer}>
                <Image src="/templered.png" alt="temple logo" layout="fill" />
              </div>
              <h1 className={styles.contentTitle}>
                hold,
                <br />
                sell or trade.
              </h1>
              <p className={styles.description1}>
                The longer you hold the more you accumulate and the more you
                earn, unlocking prizes for redemption.
              </p>
              <p className={styles.description2}>
                As your bag goes up, the larger rewards & exclusive experiences
                you can unlock.{' '}
                <strong>
                  Simply holding $WAXM, you automatically unlock Discord server
                  channels with exclusive giveaways.
                </strong>
              </p>
              <p className={styles.description3}>
                Prizes include free tickets to shows, sample packs, exclusive
                tracks & remixes, Ableton sessions, plugins discounts + much
                more.
              </p>
              <button className="btn-border">learn more</button>
            </div>
            <div
              className={styles.parent}
              onMouseMove={({ clientX: x, clientY: y }) =>
                set({ xy: calc(x, y) })
              }
            >
              <h1 className={styles.title}>
                $waxm
                <br />
                wax money
              </h1>
              <animated.div
                className={styles.bg}
                style={{ transform: props.xy.to(trans4) }}
              >
                <animated.img
                  src="/goldstatue.png"
                  alt="statue"
                  className={styles.img}
                  style={{ transform: props.xy.to(trans4) }}
                />
              </animated.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
