import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";

const PageNavigation = () => {
  return (
    <Container>
      <NavLink to="/">
        <FiArrowLeft fontSize={40} style={{ color : '#000'}} />
      </NavLink>
      <Back>Back</Back>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  align-items: center;
  padding: 1rem 4rem;
`;

const Back = styled.div`
  font-size: 2.4rem;
  margin-left: 1.4rem;
`;

export default PageNavigation;
