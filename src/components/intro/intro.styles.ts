import styled from "@emotion/styled";

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  flex: 1;
  text-align: center;
  max-width: 550px;
`;
export const ImageWrapper = styled.div`
  flex: 1;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
