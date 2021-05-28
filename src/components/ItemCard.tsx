import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, Link, Icon, Button } from 'framework7-react';
import { currency } from '@js/utils';
import { useRecoilState } from 'recoil';
import { AiFillStar } from 'react-icons/ai';
import LikeBtn from '../components/LikeBtn';

const ItemCard = (props) => {
  // const [viewType, setViewType] = useState('grid');
  console.log('itemcard props');
  return (
    <Card key={props.id} className="w-full h-full m-0" padding={false}>
      <CardHeader className="no-border h-40 w-full relative">
        <Link href={`/items/${props.id}`} className="w-full h-full align-top">
          <img src={props.image} alt="#" className="h-36 object-cover" />
        </Link>
        <LikeBtn id={props.id} />
      </CardHeader>
      <CardContent className="-mb-2">
        <div className="text-gray-500 text-xs">{props.brand}</div>
        <Link href={`/items/${props.id}`} className="flex flex-col items-start">
          <div className="mt-1 text-base font-bold">{props.name}</div>
          <div className="mt-1 text-base font-bold">{currency(props.price)}원</div>
        </Link>
        <div className="flex items-center mt-1 -mx-2.5">
          <Icon f7="heart_circle" size="25px" color="red" />
          <div className="text-xs">좋아요숫자</div>
          <div className="flex mr-1">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return <AiFillStar color={ratingValue > props.reviews_average ? 'grey' : 'coral'} />;
            })}{' '}
          </div>
          <span className="text-xs text-red-400 font-semibold">{props.reviews_count}</span>
        </div>
      </CardContent>
      {/* <CardContent className="flex">
        <Link href={`/items/${props.id}`} className="w-full h-full align-top">
          <div className="w-full">
            <img className="w-full h-1/3" src={props.image} alt="#" />
            <div className="pl-2 pr-2">
              <div className="w-full text-gray-500 text-xs">{props.brand}</div>
              <div className="mt-1 text-base font-bold">{props.name}</div>
              <div className="text-base font-bold">{currency(props.price)}원</div>
              <div className="flex justify-end items-center">
                <div className="flex mr-1">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return <AiFillStar color={ratingValue > props.reviews_average ? 'grey' : 'coral'} />;
                  })}{' '}
                </div>
                <span className="text-xs text-red-400 font-semibold">{props.reviews_count}</span>
              </div>
            </div>
          </div>
        </Link>
      </CardContent> */}
    </Card>
  );
};
export default React.memo(ItemCard);

// import React, { useState } from 'react';
// import { Link, Card } from 'framework7-react';
// import { currency } from '@js/utils';
// import { AiFillStar } from 'react-icons/ai';

// const ItemCard = ({ productCard, f7route }) => {
//   const [viewType, setViewType] = useState('grid');

//   return (
//     <div className="mt-2">
//       {productCard.map((item, i) => (
//         <Link href={`/items/${item.id}`} className="w-1/2 h-1/3 align-top" key={item.id}>
//           <div className="w-full">
//             <img className="w-full h-1/3" src={item.image} alt="#" />
//             <div className="pl-2 pr-2">
//               <div className="w-full text-gray-500 text-xs">{item.brand}</div>
//               <div className="mt-1 text-base font-bold">{item.name}</div>
//               <div className="text-base font-bold">{currency(item.price)}원</div>
//               <div className="flex justify-end items-center">
//                 <div className="flex mr-1">
//                   {[...Array(5)].map((star, i) => {
//                     const ratingValue = i + 1;
//                     return <AiFillStar color={ratingValue > item.reviews_average ? 'grey' : 'coral'} />;
//                   })}{' '}
//                 </div>
//                 <span className="text-xs text-red-400 font-semibold">{item.reviews_count}</span>
//               </div>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };
// export default React.memo(ItemCard);
