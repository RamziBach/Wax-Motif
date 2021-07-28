import { useRouter } from 'next/router';
import styles from './landing.module.css';

const Landing = () => {
  const router = useRouter();

  return (
    <div data-scroll-section>
      <section className={styles.landing}>
        <div className={styles.container}>
          <div className={styles.parent}>
            <h2 className={styles.title}>
              You must be logged in to view this content.
            </h2>
            <button
              onClick={() => router.push('/api/auth')}
              className="btn-border"
            >
              log in
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
