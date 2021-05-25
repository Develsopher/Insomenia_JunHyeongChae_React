import { Link, f7ready, Navbar, NavLeft, NavRight, NavTitle, Page } from 'framework7-react';
import React, { useEffect, useState } from 'react';
import { API_URL, getItems } from '@api';
import slideData from './slideData';
import HomeSlide from './homeSlide';
import ItemCard from '../../../components/ItemCard';

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [productCard, setProductCard] = useState([]);

  useEffect(() => {
    f7ready(async (f7) => {
      setSlides(slideData);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getItems({ q: { s: ['title asc'] } });
      setProductCard(data);
    })();
  }, []);

  return (
    <Page name="home">
      <Navbar>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" />
        </NavLeft>
        <NavTitle>JUNSINSA</NavTitle>
        <NavRight>
          <Link href="/line_items" iconF7="cart" iconBadge={3} badgeColor="red" />
        </NavRight>
      </Navbar>
      <HomeSlide slides={slides} />
      <ItemCard productCard={productCard} />
    </Page>
  );
};
export default React.memo(Home);
