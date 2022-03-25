import React, { useContext, useReducer } from "react";
import { ProductData } from "../db/ProductsData";
import _ from "lodash";

const ProductContext = React.createContext();
const ProductContextDispatcher = React.createContext();
const initialProducts = ProductData;
const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      //add Product handler
      const findIndex = state.findIndex((item) => {
        return item.id === action.id;
      });
      console.log(findIndex);
      const selectedProduct = { ...state[findIndex] };
      selectedProduct.quantity++;
      const allProducts = [...state];
      allProducts[findIndex] = selectedProduct;
      return allProducts;
    }

    case "minus": {
      //minus product handler
      const findIndex = state.findIndex((item) => {
        return item.id === action.id;
      });
      console.log(findIndex);
      const selectedProduct = { ...state[findIndex] };
      if (selectedProduct.quantity <= 1) {
        const filterProduct = state.filter((item) => {
          return item.id !== action.id;
        });
        return filterProduct;
      } else {
        selectedProduct.quantity--;
      }
      const allProducts = [...state];
      allProducts[findIndex] = selectedProduct;
      return allProducts;
    }

    case "delete": {
      const filterProduct = state.filter((item) => {
        return item.id !== action.id;
      });

      return filterProduct;
    }
    case "sort": {
      const value = action.event.value;
      if (value === "high") {
        return _.orderBy(state, ["price"], ["desc"]);
      } else {
        return _.orderBy(state, ["price"], ["asc"]);
      }
    }

    default:
  }
};

const ProductsProvider = ({ children }) => {
  const [product, dispatch] = useReducer(reducer, initialProducts);
  return (
    <ProductContext.Provider value={product}>
      <ProductContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductContextDispatcher.Provider>
    </ProductContext.Provider>
  );
};

export default ProductsProvider;

export const useProduct = () => {
  return useContext(ProductContext);
};

export const useSetProduct = () => {
  return useContext(ProductContextDispatcher);
};
