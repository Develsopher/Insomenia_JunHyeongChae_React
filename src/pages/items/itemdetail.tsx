import {Stepper, Icon, Link, Button, Navbar, NavTitle, Page } from 'framework7-react';
import React, { useState, useEffect, useRef } from 'react';
import { API_URL, getItem} from '@api';
import { currency } from '@js/utils';
import { AiFillStar } from 'react-icons/ai';

const ItemDetail = ({ id }) => {
  const [itemDetail, setItemDetail] = useState([]);
  const [isBuy, setIsBuy] = useState(false);
  const [showOption, setShowOption] = useState(false);
  const [viewOptionList, setViewOptionList] = useState(false);
	const [optionLists, setOptionLists] = useState([])
  const nextId = useRef(1);
  const [selectOptions, setSelectOptions] = useState({
    option: '',
  })
  const createOptionList = e => {
    setSelectOptions({
      ...selectOptions,
      option: e.target.dataset.value,
    })
    const optionList = {
      id: nextId.current,
      option: e.target.dataset.value,
    };
    nextId.current += 1;
    setOptionLists(optionLists.concat(optionList))
    setViewOptionList(true)
  }

  useEffect(() => {
    (async () => {
      const { data } = await getItem(id, { q: { s: ['titles asc'] } });
      setItemDetail(data);
    })();
  }, []);

  const handleBuy = () => {
    setIsBuy(!isBuy);
  };

  const handleShowOption = () => {
    setShowOption(!showOption);
  };
  
  const removeList = id => {
    console.log('하이',id)
    setOptionLists(optionLists.filter( optionLists => optionLists.id !== id))
  }

  return (
    <Page noToolbar name="itemdetail">
      <Navbar backLink="Back">
        <NavTitle>JUNSINSA</NavTitle>
        <NavRight>
          <Link href="/line_items" iconF7="cart" iconBadge={3} badgeColor="red" />
        </NavRight>
      </Navbar>
      <div className="flex justify-between items-center px-2 bg-black text-white text-lg">
        <Link>{itemDetail.brand}</Link>
        <div className="flex items-center">
          <Button iconF7="heart" className="color-white"></Button>
          <div>좋아요 숫자</div>
        </div>
      </div>
      <div className="h-3/5">
        <img className="w-full h-full" src={itemDetail.image} />
      </div>
      <div className="px-4">
        {itemDetail.category && <div className="text-gray-500">{itemDetail.category.category_name}>{itemDetail.category.category_name_eng}</div>}
        <div className="text-2xl">{itemDetail.name}</div>
        <div className="flex items-center mt-2">
          <div className="flex mr-1">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return <AiFillStar color={ratingValue > itemDetail.reviews_average ? 'grey' : 'coral'} />;
            })}{' '}
          </div>
          <span className="text-xs text-red-400 font-semibold">{itemDetail.reviews_count}</span>
        </div>
        <div className="mt-2 text-2xl">{currency(itemDetail.price)}원</div>
        <div className="mt-6 text-center text-xl">{itemDetail.description}</div>
      </div>
      {isBuy && (
        <div className="flex-col items-center justify-center fixed bottom-12 w-full">
          <div className="flex justify-center bg-black text-white">
            <Button className="relative left-4 mx-6 text-center text-white text-2xl">옵션 선택하기</Button>
            <div onClick={handleShowOption}>
              {showOption ? <Icon f7="chevron_down" size="30px"></Icon> : <Icon f7="chevron_up" size="30px"></Icon>}
            </div>
          </div>
          {showOption && (
            <div className="w-full bg-white">
              {itemDetail.options.map((item) => (
                <div onClick={createOptionList} key={item.id} data-value={item.name} className="mx-12 py-2 text-xl font-bold">
                  {item.name}
                </div>
              ))}
            </div>
          )}
          {viewOptionList && optionLists.map((item) => (
            <div className="flex items-center justify-between w-full px-12 py-4 bg-gray-200 text-xl font-bold" key={item.id}>{item.option}
              <small className="display-block"></small>
              <Stepper input={false} min={1} max={30} small round fill color="black"/>
              <div onClick={() => removeList(item.id)}>
                <Icon f7="clear" size="20px"></Icon>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex items-center h-12 w-full fixed bottom-0 bg-black">
        <div className="flex items-center h-full bg-white">
          <Icon f7="heart" color="red" size="40px"></Icon>
        </div>
        {isBuy ? (
          <div className="flex items-center">
            <Button onClick={handleBuy} className="absolute ml-10 w-full text-2xl text-white">
              구매하기
            </Button>
            <Button className="w-full h-12 bg-gray-700 text-2xl text-white">장바구니 담기</Button>
          </div>
        ) : (
          <Button onClick={handleBuy} className="relative w-full text-2xl text-white ">
            구매하기
          </Button>
        )}
      </div>
    </Page>
  );
};
export default React.memo(ItemDetail);
