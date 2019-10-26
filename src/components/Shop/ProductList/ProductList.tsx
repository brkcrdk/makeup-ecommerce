import React, { useState, useEffect, useCallback } from "react";
import { IProduct } from "../../../store/fetchProduct/types";
import { Container, Pagination, PageList, PageContent } from "./ProductStyle";

interface Props {
  // products: IProduct[];
  // isLoading: boolean;
  children: React.ReactNode;
}

const ProductList: React.FC<Props> = ({ children }) => {
  const [itemPerPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const [upperBound, setUpperBound] = useState(5);
  const [lowerBound, setLowerBound] = useState(0);
  const [pageBound] = useState(5);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const products = React.Children.map(children, (children, index) => {
    return children;
  });
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

  const handleActive = useCallback(() => {
    if (currentPage === 0) {
      setCurrentPage(1);
    } else if (currentPage > pageNumbers.length) {
      setCurrentPage(1);
    }
  }, [currentPage, pageNumbers.length]);

  useEffect(() => {
    handleActive();
  }, [currentPage, pageNumbers, handleActive]);

  const handleNext = () => {
    if (currentPage + 1 > upperBound) {
      setUpperBound(upperBound + pageBound);
      setLowerBound(lowerBound + pageBound);
    }
    if (currentPage !== pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if ((currentPage - 1) % pageBound === 0) {
      setUpperBound(upperBound - pageBound);
      setLowerBound(lowerBound - pageBound);
    }
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  //RENDER STARTS HERE
  // if (isLoading) return <p>Loading...</p>;

  const renderPageNumbers = pageNumbers.map((number, index) => {
    if (number < upperBound + 1 && number > lowerBound) {
      return (
        <PageList key={index} id={`${number}`} onClick={handleCurrentPage}>
          {number}
        </PageList>
      );
    }
  });

  const renderContent = React.Children.map(
    currentProducts,
    (children, index) => <PageContent>{children}</PageContent>
  );
  return (
    <Container>
      {renderContent}
      <Pagination>
        <div>
          <button onClick={handlePrev}>&#8592; Prev</button>
          {renderPageNumbers}
          <button onClick={handleNext}>Next &#8594;</button>
        </div>
      </Pagination>
    </Container>
  );
};

export default ProductList;
