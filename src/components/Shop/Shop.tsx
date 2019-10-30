import React, { useEffect, useCallback } from "react";
import { Container, Content, Parallax } from "./ShopStyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/fetchProduct/actions";
import { searchFilter, removeFilter } from "../../store/searchFilter/action";
import Footer from "../Content/Footer/Footer";
import ProductList from "./ProductList/ProductList";
import Filter from "./Filter/Filter";
import { IFilter } from "../../store/searchFilter/types";
import { getFilters } from "../getTypes";
// import { isArray } from "util";
interface StoreProps {
  storeProduct: {
    product: [];
    isLoading: boolean;
    error: null;
  };
  searchFilter: {
    filters: string[];
  };
  location: {
    pathname: string;
  };
  match: {};
}
const Shop: React.FC<StoreProps> = ({ location, match }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state: StoreProps) => state.searchFilter.filters);
  useEffect(() => {
    const searchType = location.pathname.split("/")[2];
    const searchInput = location.pathname.split("/")[3];
    dispatch(searchFilter([`${searchType}=${searchInput}`]));
    dispatch(fetchProduct(...filter));
  }, [dispatch, location.pathname]);

  const isLoading = useSelector(
    (state: StoreProps) => state.storeProduct.isLoading
  );
  const products = useSelector(
    (state: StoreProps) => state.storeProduct.product
  );

  // const handleRemove = useCallback(
  //   (item: string) => {
  //     dispatch(removeFilter([`${item}`]));
  //   },
  //   [dispatch]
  // );
  // const handleAdd = useCallback(() => {
  //   dispatch(searchFilter(["burak", "çardak", "murat", "çardak", "burak"]));
  // }, [dispatch]);
  return (
    <Container>
      <Parallax>
        {/* <h3>Shop filters:{filter.map((filter) => filter)}</h3> */}
      </Parallax>
      <Content>
        <Filter isLoading={isLoading} products={products} />
        <ProductList isLoading={isLoading} products={products} />
      </Content>
      <Footer />
    </Container>
  );
};

export default Shop;
