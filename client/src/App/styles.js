import styled from "styled-components";

const Application = styled.div`
  border-radius: 4px;
  color: white;
  display: flex;
  font-weight: 300;
  font-size: 25px;
  height: 50%;
  justify-content:center;
  overflow: hidden;
  width: 50%;
  @media screen and (max-width: 1201px) {
    border-radius: 0px;
    display: flex;
    height: 100%;
    width: 100%;
  }
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export { Application, Wrapper };
