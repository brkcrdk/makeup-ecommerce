import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./store/fetchProducts/actions";
interface IProps {
  products: [];
}

const Products: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const products = useSelector((state: IProps) => state.products);
  console.log(products);
  return (
    <div>
      <p>Products page</p>
    </div>
  );
};

export default Products;
