import React, { useEffect, useCallback } from "react";
import { Container, Content, Parallax } from "./ShopStyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/fetchProduct/actions";
import {
  searchFilter,
  searchTags,
  removeTags
} from "../../store/searchFilter/action";
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
    product_tags: string[];
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

  const tagSelector = useSelector(
    (state: StoreProps) => state.searchFilter.product_tags
  );

  useEffect(() => {
    dispatch(
      fetchProduct(
        `product_type=${filters.product_type}`,
        "brand=",
        "product_category=",
        `price_greater_than=${filters.price_greater_than}`,
        "price_less_than=",
        `product_tags=${tagSelector.map((tag) => tag)},`
      )
    );
  }, [dispatch, filters.price_greater_than, filters.product_type, tagSelector]);

  const isLoading = useSelector(
    (state: StoreProps) => state.storeProduct.isLoading
  );
  const products = useSelector(
    (state: StoreProps) => state.storeProduct.product
  );
  const handlePriceGreat = useCallback(() => {
    dispatch(searchFilter({ price_greater_than: 20 }));
  }, [dispatch]);
  const handlePriceClear = useCallback(() => {
    dispatch(searchFilter({ price_greater_than: 0 }));
  }, [dispatch]);

  const handleTags = (e: React.MouseEvent<HTMLSpanElement>) => {
    let target = e.target as HTMLSpanElement;
    dispatch(searchTags([target.innerText]));
  };

  const deleteTag = useCallback(() => {
    dispatch(removeTags("vegan"));
  }, [dispatch]);

  const tags = ["vegan", "canadian", "organic", "sugar free"];
  const clearAll = useCallback(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  return (
    <Container>
      <Parallax>
        <h3>Shop</h3>
        <button onClick={handlePriceGreat}>price_greate=20</button>
        <button onClick={handlePriceClear}>Clear priceState</button>
        {tags.map((tag, i) => (
          <span key={i} onClick={handleTags}>
            {tag}
          </span>
        ))}
        <button onClick={deleteTag}>Remove</button>
        <button onClick={clearAll}>ClearAll tags</button>
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
