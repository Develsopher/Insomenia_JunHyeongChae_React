import React, { useState } from 'react';
import { Link } from 'framework7-react';
import { currency } from '@js/utils';
import { AiFillStar } from 'react-icons/ai';

const ItemCard = ({ productCard, f7route }) => {
  const [viewType, setViewType] = useState('grid');

  return (
    <div className="mt-2">
      {productCard.map((item, i) => (
        <Link href={`/items/${item.id}`} className="w-1/2 h-1/3 align-top" key={item.id}>
          <div className="w-full">
            <img className="w-full h-1/3" src={item.image} alt="#" />
            <div className="pl-2 pr-2">
              <div className="w-full text-gray-500 text-xs">{item.brand}</div>
              <div className="mt-1 text-base font-bold">{item.name}</div>
              <div className="text-base font-bold">{currency(item.price)}원</div>
              <div className="flex justify-end items-center">
                <div className="flex mr-1">
                  {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;
                    return <AiFillStar color={ratingValue > item.reviews_average ? 'grey' : 'coral'} />;
                  })}{' '}
                </div>
                <span className="text-xs text-red-400 font-semibold">{item.reviews_count}</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default React.memo(ItemCard);
