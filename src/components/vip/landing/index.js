import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css';

const GatedContent = () => {
  const [balance, setBalance] = useState();

  const getBalance = async () => {
    try {
      const res = await fetch('/api/auth/balance');
      const data = await res.json();
      setBalance(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBalance();
  }, []);

  if (balance === undefined || balance.error)
    return (
      <h2 className={styles.title}>
        You must be logged in to view this content.
      </h2>
    );

  const hasWaxm = balance.some(item => item.coinKind === 'WAXM');
  const waxmBalance = balance.find(item => item.coinKind === 'WAXM');

  if (!hasWaxm)
    return <h2 className={styles.title}>You do not own any $WAXM coin.</h2>;

  if (hasWaxm && waxmBalance.coinBalance < 10)
    return (
      <h2 className={styles.title}>
        You must own 10 or more $WAXM coins to view this content.
      </h2>
    );

  return <h2 className={styles.title}>Welcome</h2>;
};

const Landing = () => {
  const router = useRouter();

  return (
    <div data-scroll-section>
      <section className={styles.landing}>
        <div className={styles.container}>
          <GatedContent />
          <button
            onClick={() => router.push('/api/auth')}
            className="btn-border"
          >
            log in
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
