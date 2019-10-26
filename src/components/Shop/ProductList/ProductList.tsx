import React, { useState, useEffect } from "react";
import { IProduct } from "../../../store/fetchProduct/types";
import { Container, PageList } from "./ProductStyle";

interface Props {
  products: IProduct[];
  isLoading: boolean;
}

const ProductList: React.FC<Props> = ({ products, isLoading }) => {
  const [itemPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const [upperPageBound, setUpperPageBound] = useState(5);
  const [lowerPageBound, setLowerPageBound] = useState(0);
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

  const handleNext = () => {
    if (currentPage !== pageNumbers.length + 1) {
      setLowerPageBound(lowerPageBound + 1);
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {};
  //RENDER STARTS HERE
  if (isLoading) return <p>Loading...</p>;

  const renderPageNumbers = pageNumbers.map((number, index) => {
    if (number === 1 && currentPage === 1) {
      return (
        <li key={index} id={`${number}`} onClick={handleCurrentPage}>
          {number}
        </li>
      );
    } else if (number < upperPageBound + 1 && number > lowerPageBound) {
      return (
        <li key={index} id={`${number}`} onClick={handleCurrentPage}>
          {number}
        </li>
      );
    }
  });

  return (
    <Container>
      {currentProducts.map((product, index) => (
        <li key={index}>{product.name}</li>
      ))}
      <PageList>
        <button onClick={handlePrev}>Prev</button>
        {renderPageNumbers}
        <button onClick={handleNext}>Next</button>
        <span>{`current:${currentPage}, lowerBound:${lowerPageBound}, upperBound:${upperPageBound}`}</span>
        {/* {pageNumbers.map((page, index) => (
          <li id={`${index + 1}`} onClick={handleCurrentPage} key={index}>
            {page}
          </li>
        ))} */}
      </PageList>
    </Container>
  );
};

export default ProductList;
