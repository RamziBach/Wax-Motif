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
              title="10 $WAXM coins"
              description="Top spot on HOW playlist for 1 week. (1500+ followers)"
              link="https://rally.io/creator/WAXM/?campaignId=6ac3e42b-6880-41fe-8c3b-c9297fa13943"
            />
            <Redeemable
              xx={230}
              columns={2}
              rows={1}
              title="15 $WAXM coins per year"
              description="All Divided Souls releases, 2 weeks early and delivered in wav & mp3 format."
              link="https://rally.io/creator/WAXM/?campaignId=7c682b6c-0aa9-4694-985a-ea9f91bbf16e"
            />
            <Redeemable
              xx={200}
              columns={3}
              rows={1}
              title="50 $WAXM coins"
              description="Birthday shoutout"
              link="https://rally.io/creator/WAXM/?campaignId=08bacf35-0796-4973-ab6c-0fc36c368867"
            />
            <Redeemable
              xx={150}
              columns={4}
              rows={1}
              title="175 $WAXM coins"
              description="1 on 1 zoom feedback sessions. (1 hour)"
              link="https://rally.io/creator/WAXM/?campaignId=c0e56ff1-eb12-4a7a-a658-e35eb2c49926"
            />
            <Redeemable
              xx={150}
              columns={5}
              rows={1}
              title="200 $WAXM coins"
              description="VIP club show tickets for you and a friend & meet n greet."
              link="https://rally.io/creator/WAXM/?campaignId=c82edcaf-6750-49fa-9691-c841b93a963f"
            />
            <Redeemable
              xx={220}
              columns={3}
              rows={2}
              title="800 $WAXM coins"
              description="Remix to be officially released on Divided Souls (Subject to remix contract terms and approval by Wax). Guest mix on House of Wax. Full Divided Souls drip pack."
              link="https://rally.io/creator/WAXM/?campaignId=f190432a-8f33-46e6-a0ae-923d0de5a555"
            />
            <Redeemable
              xx={150}
              columns={5}
              rows={2}
              title="2000 $WAXM coins"
              description="Fly to LA and hang with Wax for a day. We can go past the studio and mess around on beats or go shopping, grab food & drinks, get tattoed, hit a movie, anything goes! Flights and hotels paid for. (Subject to travel guidance and some restrictions apply)."
              link="https://rally.io/creator/WAXM/?campaignId=1a1bba8b-ac09-491e-8f71-ed8a707f66db"
            />
            <Redeemable
              xx={100}
              columns={7}
              rows={2}
              title="3000 $WAXM coins"
              description="Roll with Wax. Pick any festival in the US that Wax is playing at and become part of his crew. Live a day in the festival life, Wax Motif style. Get picked up at the airport, be chauffeured around the city, enjoy a great meal, and experience a festival alongside Wax Motif. All expenses paid (Subject to travel guidance and some restrictions apply)."
              link="https://rally.io/creator/WAXM/?campaignId=ae3bf4c8-ee58-405a-895f-637a444300bc"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Redeemables;
