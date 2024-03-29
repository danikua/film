import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  background:  var(--medGrey);
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
    font-size: var(--fontM);
    color: var(--white);
    padding: 0 10px 0 0;

    @media screen and (max-width: 767.98px){
      font-size: var(--fontS);
    }
  }
`;