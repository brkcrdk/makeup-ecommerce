import React, { useState, useEffect } from "react";
import { IProduct } from "../../../store/fetchProduct/types";
interface Props {
  products: IProduct[];
  isLoading: boolean;
}

const ProductList: React.FC<Props> = ({ products, isLoading }) => {
  //PAGINATION STARTS HERE
  const [itemPerPage] = useState(15);
  //Set current page 0 to initial value which active page
  const [currentPage, setCurrentPage] = useState(0);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleCurrentPage = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ): void => {
    let target = e.target as HTMLLIElement;
    setCurrentPage(parseFloat(target.id));
  };
  //This function runs when page is loading
  //When other product link is click pageNumber array length might change
  //When this happens currentPage might be bigger than the pageNumber length
  //This cause blank page error. To fix this bug when page loading set currentPage to 1
  const handleActive = () => {
    if (currentPage === 0) {
      setCurrentPage(1);
    } else if (currentPage > pageNumbers.length) {
      setCurrentPage(1);
    }
  };
  useEffect(() => {
    handleActive();
  }, [currentPage, pageNumbers, handleActive]);

  //RENDER STARTS HERE
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {currentProducts.map((product, index) => (
        <li key={index}>{product.name}</li>
      ))}
      <div style={{ display: "flex", listStyle: "none" }}>
        {pageNumbers.map((page, index) => (
          <li
            id={`${index + 1}`}
            onClick={handleCurrentPage}
            key={index}
            style={{ padding: "0 0.5em", cursor: "pointer" }}>
            {page}
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
