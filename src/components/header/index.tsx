import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  min-height: 67px;
  display: flex;

  align-items: center;
  padding: 12px 20px;
`;

const LogoWrapper = styled.div`
  width: 55px;
  img {
    width: 100%;
  }
`;

const Header: React.FC = () => {
  return (
    <Wrapper className="container">
      <LogoWrapper>
        <img src="images/logo.jpg" alt="LOGO" />
      </LogoWrapper>
      <p>MINIBITE</p>
    </Wrapper>
  );
};

export default Header;
