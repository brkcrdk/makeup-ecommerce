import React, { useEffect } from "react";
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
const Shop: React.FC<StoreProps> = ({ location }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);
  const isLoading = useSelector(
    (state: StoreProps) => state.storeProduct.isLoading
  );
  const searchType = location.pathname.split("/")[2];
  const searchInput = location.pathname.split("/")[3];

  return (
    <div style={{ paddingTop: "5em" }}>
      <div style={{ border: "1px solid red" }}>
        {isLoading ? "Loading please wait.." : "Shop is here"}
      </div>
    </div>
  );
};

export default Shop;
