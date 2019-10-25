import React, { useEffect } from "react";
import { Container, Content, Parallax } from "./ShopStyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/fetchProduct/actions";
import ProductList from "./ProductList/ProductList";
import Filter from "./Filter/Filter";
interface StoreProps {
  storeProduct: {
    product: [];
    isLoading: boolean;
    error: null;
  };
  location: {
    pathname: string;
  };
  match: {};
}
const Shop: React.FC<StoreProps> = ({ location, match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const searchType = location.pathname.split("/")[2];
    const searchInput = location.pathname.split("/")[3];
    dispatch(fetchProduct(`${searchType}=${searchInput}`));
  }, [dispatch, location.pathname]);
  const isLoading = useSelector(
    (state: StoreProps) => state.storeProduct.isLoading
  );

  return (
    <Container>
      <Parallax />
      <Content>
        <Filter />
        <ProductList />
      </Content>
    </Container>
  );
};

export default Shop;
