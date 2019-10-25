import React, { useState } from "react";
import { IProduct } from "../../../store/fetchProduct/types";
interface Props {
  products: IProduct[];
  isLoading: boolean;
}

const ProductList: React.FC<Props> = ({ products, isLoading }) => {
  const [itemPerPage, setItemPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {products.map((product, index) => (
        <li key={index}>{product.name}</li>
      ))}
    </div>
  );
};

export default ProductList;
