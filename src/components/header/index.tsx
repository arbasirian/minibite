import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  min-height: 67px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
`;

const Header: React.FC = () => {
  return <Wrapper className="container">MiniBite</Wrapper>;
};

export default Header;
