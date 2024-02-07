import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export const ShoppingCart = styled(FaShoppingCart)`
  width : 160px;
  height: 160px;
  color: gray;
`;

export const SubText = styled.div`
  font-size : 28px;
  margin-top: 16px;
  color: gray;
  text-align: center;
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20rem;
`;