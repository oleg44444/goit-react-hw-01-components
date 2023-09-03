import styled from '@emotion/styled';
export const Container = styled.div`
  padding: 100px;
  background-color: #cfcfd6;
  margin: auto;
  border: 2px solid #89b4f4;
`;
export const Image = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 2px solid #7c7878;
  margin: auto;
  background-color: #697ab8;
`;
export const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  color: #2f6fcc;
  margin-bottom: 20px;
`;
export const Info = styled.p`
    font-size: 22px;
    font-weight: 200;
    font-family: sans-serif;
    color: #797b85;
    text-align: center;
}`;
export const Description = styled.div`
  padding: 20px;
  background-color: #fff;
  width: 500px;
  border: 2px solid #89b4f4;
  margin-bottom: 20px;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  
  padding: 0; 
  list-style: none;
}
`;
export const StatsItem = styled.li`
  padding: 20px;
  text-align: center;
  border: 2px solid #89b4f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33.33% - 20px);
  box-sizing: border-box;
  background-color: #ffdfb8;
`;
export const StatsLabel = styled.span`
  font-size: 22px;
  font-weight: 200;
  font-family: sans-serif;
  color: #797b85;
`;
export const StatsQuantity = styled.span`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
  color: #2f6fcc;
`;
