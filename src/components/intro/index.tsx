import React from "react";
import { ContentWrapper, ImageWrapper, IntroWrapper } from "./intro.styles";

const Intro: React.FC = () => {
  return (
    <IntroWrapper>
      <ContentWrapper>
        <p>A GLOBAL FOOD EXPERIENCE</p>
        <h1>Taste the World on Your Plate</h1>
      </ContentWrapper>
      <ImageWrapper>
        <img src="images/home-slider.jpg" alt="home-slider" />
      </ImageWrapper>
    </IntroWrapper>
  );
};

export default Intro;
