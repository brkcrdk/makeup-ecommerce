import { IProducts } from "../store/fetchProducts/types";

export const getCategory = (data: []) => {
  const productTypes = data
    .filter((items: IProducts) => {
      return items.category;
    })
    .map((items: IProducts) => {
      return items.category;
    });
  const categories = productTypes.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return categories;
};

export const getType = (data: []) => {
  const productTypes = data
    .filter((items: IProducts) => {
      return items.product_type;
    })
    .map((items: IProducts) => {
      return items.product_type;
    });
  const types = productTypes.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return types;
};
//TODO: Will be using for filter section..
export const getBrand = (data: []) => {
  const productTypes = data
    .filter((items: IProducts) => {
      return items.brand;
    })
    .map((items: IProducts) => {
      return items.brand;
    });
  const brands = productTypes.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return brands;
};

export const randomItems = (data: [], count?: number) => {
  //If count not entered return 15 items else return given number of items
  //Starts from 100
  const getCount = count === undefined ? 15 : count;
  const Items = data
    .filter((items: IProducts, index) => {
      return index > 100 && index < 101 + getCount;
    })
    .map((items: IProducts) => {
      return items;
    });

  return Items;
};
