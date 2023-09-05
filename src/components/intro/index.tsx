import React from "react";
import {
  ButtonWrapper,
  ContentWrapper,
  ImageWrapper,
  IntroWrapper,
} from "./intro.styles";
import { Button } from "@mantine/core";

const Intro: React.FC = () => {
  return (
    <IntroWrapper>
      <ContentWrapper className="Container">
        <p>A GLOBAL FOOD EXPERIENCE</p>
        <h1>Taste the World on Your Plate</h1>
        <ButtonWrapper>
          <Button variant="outline" color="dark" size="md">
            VIEW MENU
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
      <ImageWrapper>
        <img src="images/home-slider.jpg" alt="home-slider" />
      </ImageWrapper>
    </IntroWrapper>
  );
};

export default Intro;
