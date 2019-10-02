import { IProducts } from "../store/fetchProducts/types";

export const getBrand = (data: []) => {
  const productTypes = data
    .filter((items: IProducts) => {
      return items.brand;
    })
    .map((items: IProducts) => {
      return items.brand;
    });
  const types = productTypes.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return types;
};

export const getCategory = (data: [], type: string) => {
  const productTypes = data
    .filter((items: IProducts) => {
      return items.product_type === type;
    })
    .map((items: IProducts) => {
      return items.category;
    });
  const types = productTypes.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return types;
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
