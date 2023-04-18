import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizzas.json';

console.log(pizzas);

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            {/* равносильное можно вызвать таким обртазом, так как это функция {Categories()} */}
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map((pizza) =>
              (<PizzaBlock {...pizza}
              //js spred - но только если свойства объекта совпадают с наименованием
              // title={pizza.title} price={pizza.price} imageUrl={pizza.imageUrl} sizes={pizza.sizes} types={pizza.types}
              />))
            }
            {/* <PizzaBlock title="Мексиканская" price={300} />
            <PizzaBlock title="Маргаритта" price={200} />
            <PizzaBlock title="Фирменная" price={370} />
            <PizzaBlock title="Грибная" price={400} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
