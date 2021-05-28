import React, { useState, useEffect } from 'react';
import { Link, Navbar, NavRight, NavLeft, NavTitle, Page } from 'framework7-react';
import { API_URL, getItem } from '@api';
import { useRecoilState } from 'recoil';
import { LikeState } from '../../common/recoil';
import ItemCard from '../../components/ItemCard';

const Likes = () => {
  const [isLike, setIsLike] = useRecoilState(LikeState);

  // useEffect(() => {
  //   (async () => {
  //     const { data } = await getLikes({ q: { s: ['titles asc'] } });
  //     setLikeList(data);
  //   })();
  // }, []);

  // console.log('------');
  // console.log('좋아요페이지isLike', isLike);

  console.log('likelist ::::', isLike);
  return (
    <Page>
      <Navbar>
        <NavLeft>
          <Link icon="las la-bars" panelOpen="left" />
        </NavLeft>
        <NavTitle>찜목록</NavTitle>
        <NavRight>
          <Link href="/line_items" iconF7="cart" iconBadge={3} badgeColor="red" />
        </NavRight>
      </Navbar>
      {isLike.length ? (
        <div className="pr-2 border-b-1 text-right text-lg font-bold">총{isLike.length}건</div>
      ) : (
        <div className="h-full flex justify-center items-center text-3xl">
          <div>찜한 상품이 없습니다.</div>
        </div>
      )}
      {isLike.map((item) => (
        <div className="grid grid-cols-2">
          <ItemCard
            key={item.id}
            id={item.id}
            image={item.image}
            brand={item.brand}
            name={item.name}
            price={item.price}
            reviews_average={item.reviews_average}
            reviews_count={item.reviews_count}
          />
        </div>
      ))}
    </Page>
  );
};
export default React.memo(Likes);
