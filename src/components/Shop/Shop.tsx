import React, { useEffect, useCallback } from "react";
import { Container, Content, Parallax } from "./ShopStyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/fetchProduct/actions";
import { searchFilter } from "../../store/searchFilter/action";
import Footer from "../Content/Footer/Footer";
import ProductList from "./ProductList/ProductList";
import Filter from "./Filter/Filter";
import { IFilter } from "../../store/searchFilter/types";

interface StoreProps {
  storeProduct: {
    product: [];
    isLoading: boolean;
    error: null;
  };
  searchFilter: {
    filters: IFilter;
  };
  location: {
    pathname: string;
  };
}
const Shop: React.FC<StoreProps> = ({ location }) => {
  const dispatch = useDispatch();
  const filters = useSelector(
    (state: StoreProps) => state.searchFilter.filters
  );
  const tags = [""];
  console.log(filters);
  useEffect(() => {
    const searchType = location.pathname.split("/")[2];
    const searchInput = location.pathname.split("/")[3];
    dispatch(searchFilter({ price_greater_than: 20 }));
    dispatch(
      fetchProduct(
        `${searchType}=${searchInput}`,
        `price_greater_than=`,
        "price_less_than=",
        "brand=",
        `product_tags=${tags.map((tag) => {
          return tag;
        })}`
      )
    );
  }, [dispatch, location.pathname]);

  const isLoading = useSelector(
    (state: StoreProps) => state.storeProduct.isLoading
  );
  const products = useSelector(
    (state: StoreProps) => state.storeProduct.product
  );

  return (
    <Container>
      <Parallax>
        <h3>Shop</h3>
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
