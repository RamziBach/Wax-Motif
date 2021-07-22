import Redeemable from './redeemable';
import styles from './redeemables.module.css';

const Redeemables = () => {
  return (
    <div data-scroll-section>
      <section className={styles.redeemables}>
        <div className={styles.container}>
          <div className={styles.imgContainer}>
            <img src="/neko.svg" alt="cat" className={styles.neko} />
          </div>
          <h2 className={styles.title}>redeemables</h2>
          <div className={styles.grid}>
            <Redeemable
              xx={270}
              columns={1}
              rows={1}
              title="15 $WAXM coins"
              description="Top spot on HOW playlist for 1 week. (1500+ followers)"
            />
            <Redeemable
              xx={230}
              columns={2}
              rows={1}
              title="15 $WAXM coins per year"
              description="All Divided Souls releases, 2 weeks early and delivered in wav & mp3 format."
            />
            <Redeemable
              xx={200}
              columns={3}
              rows={1}
              title="75 $WAXM coins"
              description="Birthday shoutout"
            />
            <Redeemable
              xx={150}
              columns={4}
              rows={1}
              title="250 $WAXM coins"
              description="1 on 1 zoom feedback sessions. (1 hour)"
            />
            <Redeemable
              xx={150}
              columns={5}
              rows={1}
              title="450 $WAXM coins"
              description="VIP club show tickets for you and a friend & meet n greet."
            />
            <Redeemable
              xx={220}
              columns={3}
              rows={2}
              title="1500 $WAXM coins"
              description="Remix to be officially released on Divided Souls (Subject to remix contract terms and approval by Wax). Guest mix on House of Wax. Full Divided Souls drip pack."
            />
            <Redeemable
              xx={150}
              columns={5}
              rows={2}
              title="3000 $WAXM coins"
              description="Fly to LA and hang with Wax for a day. We can go past the studio and mess around on beats or go shopping, grab food & drinks, get tattoed, hit a movie, anything goes! Flights and hotels paid for. (Subject to travel guidance and some restrictions apply)."
            />
            <Redeemable
              xx={100}
              columns={7}
              rows={2}
              title="5000 $WAXM coins"
              description="Roll with Wax. Pick any festival in the US that Wax is playing at and become part of his crew. Live a day in the festival life, Wax Motif style. Get picked up at the airport, be chauffeured around the city, enjoy a great meal, and experience a festival alongside Wax Motif. All expenses paid (Subject to travel guidance and some restrictions apply)."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Redeemables;
