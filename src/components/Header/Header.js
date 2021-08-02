import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const List = styled.ul`
  width: 100%;
  display: flex;
  padding: 1rem;
`;

const Header = styled.header`
  background-color: azure;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const SLink = styled(Link)``;

const Li = styled.li`
  text-align: center;
  font-size: 2rem;
  padding: 0.1rem;
  padding: 0.2rem;
  width: 8rem;
  border-bottom: 0.1rem solid
    ${(props) => (props.current ? "red" : "transparent")};
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export default withRouter(({ location: { pathname } }) => {
  return (
    <Header>
      <List>
        <Li current={pathname === "/"}>
          <SLink to="/">Home </SLink>
        </Li>
        <Li current={pathname === "/detail"}>
          <SLink to="/detail">Detail </SLink>
        </Li>
        <Li current={pathname === "/tv"}>
          <SLink to="/tv">TV</SLink>
        </Li>
      </List>
    </Header>
  );
});
