import Categories from '../components/categories';
import Products from '../components/products';

export const Dashboard = (props: any): JSX.Element => {
  return (
    <>
      <Categories></Categories>
      <Products {...props}></Products>
    </>
  );
};
