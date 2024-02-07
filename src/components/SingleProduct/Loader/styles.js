import styled from "styled-components";

export const Container = styled.section``;

export const SmallImagePreview = styled.div`
    width: 100%;
    height: 120px;
    background: lightgrey;
    margin: 0 8px 16px 0;
    border-radius: 4px;
    background: linear-gradient(to right, #f0f0f0, #f5f5f5); 
    background-size: 200% 100%;
    animation: moveLeftToRight 1s ease-in infinite; 

    @keyframes moveLeftToRight {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
`;

export const FitScreenImage = styled.div`
  display:flex;
  flex : 2;
  width: 60px;
  height: 390px;
  margin: 0 16px;
  border-radius: 4px;
  background: linear-gradient(to right, #f0f0f0, #f5f5f5); 
  background-size: 200% 100%;
  animation: moveLeftToRight 1s ease-in infinite; 

  @keyframes moveLeftToRight {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
`;

export const Skeleton = styled.div`
    width: ${({width}) => `${width}px` || '100%'};
    height: ${({height}) => `${height}px` || '100%'};
    background: lightgrey;
    margin: 0 8px 16px 0;
    border-radius: 4px;
    background: linear-gradient(to right, #f0f0f0, #f5f5f5); 
    background-size: 200% 100%;
    animation: moveLeftToRight 1s ease-in infinite; 

    @keyframes moveLeftToRight {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
`;

export const SubContainer = styled.div`
  display: flex;
  flex : 4;
  padding: 8rem;
`;