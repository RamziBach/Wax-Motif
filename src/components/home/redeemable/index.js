import { useEffect, useRef, useState } from 'react';
import GravityScene from './gravity_scene';
import styles from './redeemable.module.css';

const Redeemable = () => {
  const [hasGravityStarted, setHasGravityStarted] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHasGravityStarted(true);
          console.log('entered');
          observer.unobserve(targetRef.current);
        }
      });
    }, options);

    observer.observe(targetRef.current);

    () => observer.unobserve(targetRef.current);
  }, []);

  return (
    <div data-scroll-section>
      <section className={styles.redeemable}>
        <div className={styles.container}>
          <h2 className={styles.title}>redeemables</h2>
          <div className={styles.grandParent}>
            <div className={styles.parent} ref={targetRef}>
              {hasGravityStarted && <GravityScene />}
              <div className={styles.zIndex}>
                <h3 className={styles.rewardTitle}>Redeem your $WAXM</h3>
                <p className={styles.rewardDescription}>
                  Want a 1:1 call with Wax? How about going to a festival with
                  Wax for a day $WAXM can be redeemed for really dope
                  experiences.
                </p>
                <button className="btn-border">store page</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Redeemable;
