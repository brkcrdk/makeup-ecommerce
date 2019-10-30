import { IProducts } from "../store/fetchProducts/types";
import { isArray } from "util";

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
  return categories.sort();
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
  return types.sort();
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
  return brands.sort();
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

  return Items.sort();
};

export const getColours = (data: []) => {
  const productColours = data
    .filter((items: IProducts) => {
      return items.product_colors.length > 0;
    })
    .map((item: IProducts, index) => {
      return item.product_colors;
    });

  return productColours;
};

export const getTags = (data: []) => {
  const tagList: string[] = [];
  const productTags = data
    .filter((items: IProducts) => {
      return items.tag_list.length > 0;
    })
    .map((item: IProducts) => {
      return item.tag_list.map((tag) => {
        return tagList.push(tag);
      });
    });
  const tag = tagList.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
  return tag;
};

// export const getFilters = (filterObj: IFilter) => {
//   const values = Object.entries(filterObj);
//   const filters = values
//     .filter((value) => {
//       return value[1] !== "" && value[1] !== 0;
//     })
//     .filter((value) => {
//       if (isArray(value[1])) {
//         if (value[1].length > 0) {
//           return value;
//         }
//       } else {
//         return value;
//       }
//     });
//   return filters.map((filter) => {
//     return `${filter[0]}=${filter[1]}`;
//   });
// };
