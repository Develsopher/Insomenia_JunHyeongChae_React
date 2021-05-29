import React from 'react';
import { Card, CardContent, CardHeader, Link, Icon } from 'framework7-react';
import { currency } from '@js/utils';
import { AiFillStar } from 'react-icons/ai';
import LikeBtn from '../components/LikeBtn';

const ItemCard = (props) => {
  return (
    <Card key={props.id} className="w-full h-full m-0" padding={false}>
      <CardHeader className="no-border h-40 w-full relative">
        <Link href={`/items/${props.id}`} className="w-full h-full align-top">
          <img src={props.image} alt="#" className="h-36 object-cover" />
        </Link>
        <LikeBtn id={props.id} isLike={props.isLike} />
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
            {[...Array(5)].map((i) => {
              const ratingValue = i + 1;
              return <AiFillStar color={ratingValue > props.reviews_average ? 'grey' : 'coral'} />;
            })}{' '}
          </div>
          <span className="text-xs text-red-400 font-semibold">{props.reviews_count}</span>
        </div>
      </CardContent>
    </Card>
  );
};
export default React.memo(ItemCard);
