import React from 'react';

import { client } from './components/lib/client.js'


import { Product, FooterBanner, HeroBanner} from './components';
import banner from '../clachashop/schemas/banner.js';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}    />
      {console.log(bannerData)}
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p> shop for our best selling products </p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}


export default Home;