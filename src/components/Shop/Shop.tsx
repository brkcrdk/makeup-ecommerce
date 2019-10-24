import React, { useEffect } from "react";
import { Container, BreadCrumb } from "./ShopStyle";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/fetchProduct/actions";
interface StoreProps {
  storeProduct: {
    product: [];
    isLoading: boolean;
    error: null;
  };
  location: {
    pathname: string;
  };
}
const Shop: React.FC<StoreProps> = ({ location }, match) => {
  console.log(match);
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
      <BreadCrumb>
        {isLoading ? "Loading please wait.." : "Shop is here"}
      </BreadCrumb>
    </Container>
  );
};

export default Shop;
