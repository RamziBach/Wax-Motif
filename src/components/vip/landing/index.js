import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css';

const GatedContent = () => {
  const router = useRouter();
  const [balance, setBalance] = useState();

  // Gets the balance of the user
  const getBalance = async () => {
    try {
      const res = await fetch('/api/auth/balance');
      const data = await res.json();
      setBalance(data);
    } catch (err) {
      console.error(err);
    }
  };

  // Gets the balance on mount
  useEffect(() => {
    getBalance();
  }, []);

  // Loading state
  if (!balance) return <h2 className={styles.title}>Loading...</h2>;

  // State before logging in
  if (balance === undefined) {
    return (
      <>
        <h2 className={styles.title}>
          You must be logged in to view this content.
        </h2>
        <button onClick={() => router.push('/api/auth')} className="btn-border">
          log in
        </button>
      </>
    );
  }

  let hasWaxm;
  let waxmBalance;

  // Set variables if conditions are met
  if (balance !== undefined || balance !== null) {
    // Retruns true if user owns WAXM
    hasWaxm = balance.some(item => item.coinKind === 'WAXM');
    // Finds and returns the WAXM object
    waxmBalance = balance.find(item => item.coinKind === 'WAXM');
  }

  // Condition when not owning any WAXM coins
  if (hasWaxm !== undefined && !hasWaxm)
    return <h2 className={styles.title}>You do not own any $WAXM coin.</h2>;

  // Condition when not owning enough WAXM coins
  if (hasWaxm !== undefined && hasWaxm && waxmBalance.coinBalance < 10)
    return (
      <h2 className={styles.title}>
        You must own 10 or more $WAXM coins to view this content.
      </h2>
    );

  // Error state
  if (balance.message === 'non-UUID ID') {
    return (
      <>
        <h2 className={styles.title}>Something went wrong, try again.</h2>
        <button onClick={() => router.push('/api/auth')} className="btn-border">
          log in
        </button>
      </>
    );
  }

  // See gated content if user has 10 or more $WAXM coins
  if (hasWaxm !== undefined && hasWaxm && waxmBalance.coinBalance >= 10)
    return <h2 className={styles.title}>Welcome, VIP coming soon !</h2>;

  // Else return
  return (
    <>
      <h2 className={styles.title}>Something went wrong, try again.</h2>
      <button onClick={() => router.push('/api/auth')} className="btn-border">
        log in
      </button>
    </>
  );
};

const Landing = () => {
  return (
    <div data-scroll-section>
      <section className={styles.landing}>
        <div className={styles.container}>
          <div className={styles.parent}>
            <GatedContent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
