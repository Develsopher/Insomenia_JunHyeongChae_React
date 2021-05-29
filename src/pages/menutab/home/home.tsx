import { Link, f7ready, Navbar, NavLeft, NavRight, NavTitle, Page } from 'framework7-react';
import React, { useEffect, useState } from 'react';
import { API_URL, getItems, getLikes } from '@api';
import { useRecoilState } from 'recoil';
import { LikeState } from '../../../common/recoil';
import slideData from './slideData';
import HomeSlide from './homeSlide';
import ItemCard from '../../../components/ItemCard';

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [likeItem, setLikeItem] = useRecoilState(LikeState);
  // const [likeList, setLikeList] = useRecoilState(LikeList);
  // const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    f7ready(async (f7) => {
      setSlides(slideData);
    });
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getItems({ q: { s: ['title asc'] } });
      setItemList(data);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await getLikes();
      setLikeItem(data);
    })();
  }, []);

  const likeItemArray = [];
  likeItem.map((item) => likeItemArray.push(item.id));

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
      {/* <ItemCard productCard={productCard} /> */}
      <div className="grid grid-cols-2">
        {itemList.length &&
          itemList.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              image={item.image}
              brand={item.brand}
              name={item.name}
              price={item.price}
              reviews_average={item.reviews_average}
              reviews_count={item.reviews_count}
              isLike={likeItemArray.includes(item.id)}
            />
          ))}
      </div>
    </Page>
  );
};
export default React.memo(Home);

// import { Link, f7ready, Navbar, NavLeft, NavRight, NavTitle, Page } from 'framework7-react';
// import React, { useEffect, useState } from 'react';
// import { API_URL, getItems } from '@api';
// import slideData from './slideData';
// import HomeSlide from './homeSlide';
// import ItemCard from '../../../components/ItemCard';

// const Home = () => {
//   const [slides, setSlides] = useState([]);
//   const [productCard, setProductCard] = useState([]);

//   useEffect(() => {
//     f7ready(async (f7) => {
//       setSlides(slideData);
//     });
//   }, []);

//   useEffect(() => {
//     (async () => {
//       const { data } = await getItems({ q: { s: ['title asc'] } });
//       setProductCard(data);
//     })();
//   }, []);

//   return (
//     <Page name="home">
//       <Navbar>
//         <NavLeft>
//           <Link icon="las la-bars" panelOpen="left" />
//         </NavLeft>
//         <NavTitle>JUNSINSA</NavTitle>
//         <NavRight>
//           <Link href="/line_items" iconF7="cart" iconBadge={3} badgeColor="red" />
//         </NavRight>
//       </Navbar>
//       <HomeSlide slides={slides} />
//       <ItemCard productCard={productCard} />
//     </Page>
//   );
// };
// export default React.memo(Home);
