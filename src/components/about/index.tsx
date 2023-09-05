import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  grid-column-gap: 50px;
`;
const About: React.FC = () => {
  return (
    <Wrapper className="container">
      <p>OUR STORY</p>
      <h2>The Recipe of Our Success</h2>
      <p>
        Our success lies in our dedication to quality and attention to detail.
        We source only the finest ingredients and prepare them with care and
        precision to bring out their natural flavors. Our chefs work tirelessly
        to craft each dish to perfection, ensuring that every bite is a
        delightful experience.
      </p>
    </Wrapper>
  );
};

export default About;
