import { useState, useEffect } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import PizzaSceleton from '../components/PizzaBlock/PizzaSceleton';

export default function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0); //выбор вида пиццы
  const [sortType, setSortType] = useState({
    name: 'популярности (desc)',
    sortProperty: 'rating',
    sortType: 'desc',
  }); //выбор сортировки

  console.log(categoryId, sortType);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://644043bf3dee5b763e33483b.mockapi.io/items?${
        categoryId ? `category=${categoryId}` : ``
      }&sortBy=${sortType.sortProperty}&order=${sortType.sortType}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0); //перекинуть вверх страницы
  }, [categoryId, sortType]);

  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
          {/* равносильное можно вызвать таким обртазом, так как это функция {Categories()} */}
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <PizzaSceleton key={index} />)
            : pizzas.map((pizza) => (
                <PizzaBlock
                  key={pizza.id}
                  {...pizza}
                  //js spred - но только если свойства объекта совпадают с наименованием
                  // title={pizza.title} price={pizza.price} imageUrl={pizza.imageUrl} sizes={pizza.sizes} types={pizza.types}
                />
              ))}
          {/* <PizzaBlock title="Мексиканская" price={300} />
            <PizzaBlock title="Маргаритта" price={200} />
            <PizzaBlock title="Фирменная" price={370} />
            <PizzaBlock title="Грибная" price={400} /> */}
        </div>
      </div>
    </>
  );
}
