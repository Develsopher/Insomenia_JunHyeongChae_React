import { Link, Navbar, NavRight, NavTitle, Page } from 'framework7-react';
import React, { useEffect, useState } from 'react';
import { API_URL, getItemFromCategory } from '@api';
import ItemCard from '../../components/ItemCard';

const CategoriedItem = ({ id }) => {
  const [productCard, setProductCard] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await getItemFromCategory(id, { q: { s: ['title asc'] } });
      setProductCard(data.items);
    })();
  }, []);

  return (
    <Page name="itemindexpage">
      <Navbar backLink="Back">
        <NavTitle>JUNSINSA</NavTitle>
        <NavRight>
          <Link href="/line_items" iconF7="cart" iconBadge={3} badgeColor="red" />
        </NavRight>
      </Navbar>
      {productCard.length ? (
        <div className="pr-2 border text-right text-lg font-bold">총{productCard.length}건</div>
      ) : (
        <div className="h-full flex justify-center items-center text-3xl">
          <div>상품을 준비중입니다.</div>
        </div>
      )}
      <ItemCard productCard={productCard} />
    </Page>
  );
};
export default React.memo(CategoriedItem);
