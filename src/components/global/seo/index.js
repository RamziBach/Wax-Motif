import Head from 'next/head';

const Seo = ({ title = 'WAX MOTIF' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta
        name="description"
        content="A social token cryptocurrency by music producer and DJ Wax Motif and the waxgang"
      />
      <meta
        name="keywords"
        content="social, money, token, cryptocurrency, music, producer, dj, wax, motif, wax motif, waxgang"
      />
      <meta property="og:url" content="https://www.waxmoney.com" key="ogurl" />
      <meta property="og:image" content="/ogimage.jpg" key="ogimage" />
      <meta property="og:image:width" content="1623" />
      <meta property="og:image:height" content="913" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="$WAXM" key="ogsitename" />
      <meta
        property="og:title"
        content="$WAXM | Wax Motif social token"
        key="ogtitle"
      />
      <meta
        property="og:description"
        content="A social token cryptocurrency by music producer &amp; DJ Wax Motif &amp; the waxgang"
        key="ogdesc"
      />
      <meta name="twitter:creator" content="@WaxMotif" key="twhandle" />
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:title" content="$WAXM | Wax Motif social token" />
      <meta
        name="twitter:description"
        content="A social token cryptocurrency by music producer &amp; DJ Wax Motif &amp; the waxgang"
      />
      <meta name="twitter:image" content="/ogimage.jpg" />
    </Head>
  );
};

export default Seo;
