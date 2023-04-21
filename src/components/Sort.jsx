import { useState } from 'react';

function Sort({ value, onChangeSort }) {
  const sortList = [
    { name: 'популярности (desc)', sortProperty: 'rating', sortType: 'desc' },
    { name: 'популярности (asc)', sortProperty: 'rating', sortType: 'asc' },
    { name: 'цене (desc)', sortProperty: 'price', sortType: 'desc' },
    { name: 'цене (asc)', sortProperty: 'price', sortType: 'asc' },
    { name: 'алфавиту (decs)', sortProperty: 'title', sortType: 'desc' },
    { name: 'алфавиту (asc)', sortProperty: 'title', sortType: 'asc' },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  const onClickListElement = (i) => {
    onChangeSort(i);
    setOpenMenu(!openMenu);
  };

  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpenMenu(!openMenu)}>{value.name}</span>
      </div>
      {openMenu && (
        <div className="sort__popup">
          <ul>
            {sortList.map((element, index) => (
              <li
                key={index}
                onClick={() => onClickListElement(element)}
                className={
                  value.sortProperty === element.sortProperty && value.sortType === element.sortType
                    ? 'active'
                    : ''
                }
              >
                {element.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
