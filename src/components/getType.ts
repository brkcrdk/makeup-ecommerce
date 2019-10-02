import { IProducts } from "../store/fetchProducts/types";

const getType = (type: any, data: []) => {
  const arg = `items.${type}`;
  const productTypes = data
    .filter((items: IProducts) => {
      return arg;
    })
    .map((items: IProducts) => {
      return arg;
    });
  //TODO: Filter to get array without duplicates
  const types = productTypes.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return types;
};
export default getType;
