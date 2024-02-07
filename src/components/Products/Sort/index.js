import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../../../context/filter_context";
import { Container } from './styles';

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();

  const productCount = filter_products?.length;

  return (
    <Container className="sort-section">
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}>
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}>
          <BsList className="icon" />
        </button>
      </div>

      <div className="product-data">
        {productCount > 0 && <p>{`${productCount} Product Available`}</p>}
      </div>

      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select
          style={{ width: '200px', height:'38px', borderRadius:'8px', padding: '0 4px'}}
            name="sort"
            id="sort"
            className="sort-selection--style"
            onClick={sorting}>
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Container>
  );
};

export default Sort;
