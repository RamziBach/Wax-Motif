import { useRef } from 'react';
import { useRouter } from 'next/router';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Seo from '@components/global/seo';
import Header from '@components/global/header';
import Gated from '@components/vip/gated';

const Home = ({ price }) => {
  const router = useRouter();
  const { id } = router.query;
  const containerRef = useRef(null);

  return (
    <>
      <Seo title="WAXM - VIP" />
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          tablet: {
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
          },
          smartphone: {
            smooth: true,
            direction: 'vertical',
            gestureDirection: 'vertical',
          },
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Header price={price} />
          <Gated id={id} />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const response = await fetch(
    'https://api.rally.io/v1/creator_coins/WAXM/price'
  );
  const data = await response.json();
  const price = data.priceInUSD.toString().slice(0, 5);

  return {
    props: { price },
  };
}
