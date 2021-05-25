import React, { useEffect, useState } from 'react';
import { API_URL, getCategories } from '@api';
import { Link, SkeletonBlock, SkeletonText } from 'framework7-react';
import { Category } from '@constants';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getCategories({ q: { s: ['title asc'] } });
      setCategories(data);
    })();
  }, []);

  return (
    <div className="mt-2">
      {categories.map((category: Category, i) => (
        <div className="pl-4" key={category.id}>
          {categories.length ? (
            <Link
              href={`/items/category/${category.id}`}
              className="bg-white h-20 flex justify-start hover:bg-gray-300"
              key={category.id}
            >
              <img src={category.image} alt="#" className="w-14 h-14 rounded-lg shadow-sm" />
              <div className="flex flex-col justify-start">
                <div className="mt-1 ml-2 font-bold">{category.category_name}</div>
                <div className="ml-2 text-gray-500">{category.category_name_eng}</div>
              </div>
            </Link>
          ) : (
            <Link href="#" className="bg-white h-20 flex flex-col items-center justify-center" key={i}>
              <SkeletonBlock slot="media" className="w-14 h-14 rounded-lg shadow-sm" effect="fade" />
              <span className="text-gray-500 mt-1">
                <SkeletonText>---</SkeletonText>
              </span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Categories);
