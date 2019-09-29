import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./store/fetchProducts/actions";
interface ProductTypes {
  storeProducts: {
    products: [];
    isLoading: boolean;
    error: null | {};
  };
}
const Products: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const products = useSelector(
    (state: ProductTypes) => state.storeProducts.products
  );
  const isLoading = useSelector(
    (state: ProductTypes) => state.storeProducts.isLoading
  );
  console.log(products);
  console.log(isLoading);
  return (
    <div>
      <p>Products page</p>
      <p></p>
    </div>
  );
};

export default Products;
