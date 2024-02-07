import React from "react";
import { useFilterContext } from "../../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";
import { ShoppingCart, SubText, EmptyState } from './styles';

const ProductList = () => {
  const { filter_products: products = [], grid_view = false } = useFilterContext();

  if(products?.length <= 0){
    return(
      <EmptyState>
        <ShoppingCart />
        <SubText>Products are not available for search query</SubText>
      </EmptyState>
    )
  }

  if (grid_view) {
    return <GridView products={products} />;
  }

  return <ListView products={products} />
};

export default ProductList;
