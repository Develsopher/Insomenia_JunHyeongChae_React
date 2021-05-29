import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { API_URL, postLikes, delLikes } from '@api';
import { Link, Icon, f7, Button } from 'framework7-react';
import { LikeState } from '../common/recoil';

const LikeBtn = (props) => {
  const [likeItem, setLikeItem] = useRecoilState(LikeState);

  const handleLikeList = async () => {
    if (props.isLike) {
      await delLikes(props.id);
      const isUnlike = likeItem.filter((item) => item.id !== props.id);
      setLikeItem(isUnlike);
      f7.dialog.alert('찜 리스트를 제거하였습니다.');
    } else {
      const { data } = await postLikes({
        item_id: props.id,
      });
      setLikeItem([...likeItem, data]);
      f7.dialog.alert('찜 리스트에 추가되었습니다.');
    }
  };

  return (
    <Button onClick={handleLikeList} className="absolute z-10 right-2 bottom-2">
      {props.isLike ? <Icon f7="heart_fill" color="red" /> : <Icon f7="heart" color="black" />}
    </Button>
  );
};

export default React.memo(LikeBtn);

// const [isLike, setIsLike] = useRecoilState(LikeState);
//   const [likeArray, setLikeArray] = useState([]);

//   const handleLikeList = async (e) => {
//     const id = Number(e.target.dataset.idx);

//     if (e.target.dataset.liked === 'gray') {
//       const { data } = await postLikes({
//         item_id: id,
//       });
//       console.log('postlikes', data);
//       setLikeArray([...likeArray, data.item_id]);
//       // const abc = [...isLike, data.item];
//       // data.item.map((el) => likeArray.push(el.id));
//       setIsLike([...isLike, data.item]);
//       f7.dialog.alert('찜 리스트에 추가되었습니다.');
//     } else {
//       const { data } = await delLikes(id);
//       console.log('******', data);
//       console.log('----', data[0].id);
//       setLikeArray([...likeArray.filter((item) => item.id !== id)]);
//       const isUnlike = isLike.filter((item) => item.id !== id);
//       setIsLike(isUnlike);

//       console.log('likebtn', isLike);
//       f7.dialog.alert('찜 리스트를 제거하였습니다.');
//     }
//     // if (e.target.dataset.liked === 'black') {
//     //   const { data } = await delLikes(id);
//     //   // console.log('******', data);
//     //   setLikeArray([...likeArray, id]);
//     //   const isUnlike = isLike.filter((item) => item !== id);
//     //   setIsLike(isUnlike);
//     // }
//   };
//   // console.log('isLike', isLike);
//   // console.log('*****likeArray', likeArray);
//   // console.log('id포함여부체크', likeArray.includes(props.id));
//   console.log('0000', isLike);
//   console.log('likeArray', likeArray);

//   return (
//     <Button onClick={handleLikeList} className="absolute z-10 right-2 bottom-2">
//       <Icon
//         f7="heart_fill"
//         size="30px"
//         color={likeArray.includes(props.id) ? 'black' : 'gray'}
//         data-liked={likeArray.includes(props.id) ? 'black' : 'gray'}
//         // color={isLike.includes(props.id) ? 'black' : 'gray'}
//         // data-liked={isLike.includes(props.id) ? 'black' : 'gray'}
//         data-idx={props.id}
//       />
//     </Button>
//   );
// };
