import ContentLoader from 'react-content-loader';

const PizzaSceleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="292" y="133" rx="3" ry="3" width="88" height="6" />
    <circle cx="130" cy="130" r="125" />
    <rect x="0" y="281" rx="11" ry="11" width="260" height="27" />
    <rect x="246" y="291" rx="0" ry="0" width="73" height="0" />
    <rect x="0" y="318" rx="10" ry="10" width="260" height="76" />
    <rect x="0" y="408" rx="11" ry="11" width="90" height="43" />
    <rect x="110" y="407" rx="30" ry="30" width="150" height="43" />
  </ContentLoader>
);

export default PizzaSceleton;
