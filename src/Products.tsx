import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./store/fetchProducts/actions";
import { IProducts } from "./store/fetchProducts/types";
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

  return (
    <div>
      <p>Products page</p>
      {products &&
        products
          .filter((items: IProducts) => {
            return items.product_type === "blush";
          })
          .map((items: IProducts, key) => <li key={key}>{items.name}</li>)}
      <p></p>
    </div>
  );
};

export default Products;
