import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { API_URL, postLikes, delLikes } from '@api';
import { Link, Icon, f7, Button } from 'framework7-react';
import { LikeState } from '../common/recoil';

const LikeBtn = (props) => {
  const [isLike, setIsLike] = useRecoilState(LikeState);
  const [likeArray, setLikeArray] = useState([]);

  const handleLikeList = async (e) => {
    const id = Number(e.target.dataset.idx);
    console.log(id);

    if (e.target.dataset.liked === 'gray') {
      const { data } = await postLikes({
        item_id: id,
      });
      console.log('postlikes', data);
      setLikeArray([...likeArray, data.item_id]);
      // const abc = [...isLike, data.item];
      // data.item.map((el) => likeArray.push(el.id));
      setIsLike([...isLike, data.item]);
      console.log('likeArray', likeArray);
      f7.dialog.alert('찜 리스트에 추가되었습니다.');
    } else {
      const { data } = await delLikes(id);
      console.log('******', data);
      console.log('----', data[0].id);
      setLikeArray([...likeArray, likeArray.filter((item) => item.id !== id)]);
      const isUnlike = isLike.filter((item) => item.id !== id);
      setIsLike(isUnlike);

      console.log('likebtn', isLike);
      f7.dialog.alert('찜 리스트를 제거하였습니다.');
    }
    // if (e.target.dataset.liked === 'black') {
    //   const { data } = await delLikes(id);
    //   // console.log('******', data);
    //   setLikeArray([...likeArray, id]);
    //   const isUnlike = isLike.filter((item) => item !== id);
    //   setIsLike(isUnlike);
    // }
  };
  // console.log('isLike', isLike);
  console.log('*****likeArray', likeArray);
  console.log('id포함여부체크', likeArray.includes(props.id));

  return (
    <Button onClick={handleLikeList}>
      <Icon
        f7="heart_fill"
        size="30px"
        color={likeArray.includes(props.id) ? 'black' : 'gray'}
        data-liked={likeArray.includes(props.id) ? 'black' : 'gray'}
        // color={isLike.includes(props.id) ? 'black' : 'gray'}
        // data-liked={isLike.includes(props.id) ? 'black' : 'gray'}
        data-idx={props.id}
      />
    </Button>
  );
};

export default LikeBtn;
