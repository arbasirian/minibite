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
  margin: 0 auto;
`;
export const ImageWrapper = styled.div`
  flex: 1;
  max-width: 50vw;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
