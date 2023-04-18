import { useState } from 'react';

function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
  const [activeIndex, setActiveIndex] = useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categorie, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                onClickCategory(index);
              }}
              className={activeIndex === index ? 'active' : ''}
            >
              {categorie}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;