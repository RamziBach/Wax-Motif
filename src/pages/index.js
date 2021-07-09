import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import Seo from '@components/global/seo';
import Header from '@components/global/header';
import Landing from '@components/home/landing';
import Rally from '@components/home/rally';
import Footer from '@components/global/footer';

const Home = ({ price }) => {
  const containerRef = useRef(null);

  return (
    <>
      <Seo title="RAMZI - HOME" />
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
          <Landing />
          <Rally />
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch(
    'https://api.rally.io/v1/creator_coins/WAXM/price'
  );
  const data = await response.json();
  const price = data.priceInUSD.toString().slice(0, 5);

  return {
    props: { price },
    revalidate: 30,
  };
}
