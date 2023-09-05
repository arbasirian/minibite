import styled from "@emotion/styled";

export const IntroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: calc(100vh - 67px);
  overflow: hidden;
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

export const ButtonWrapper = styled.div`
  margin: 16px;
`;
