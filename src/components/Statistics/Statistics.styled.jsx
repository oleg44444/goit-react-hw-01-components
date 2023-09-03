import styled from '@emotion/styled';

export const Container = styled.section`
  padding: 20px;
  background-color: #fff;
  width: 500px;
  border: 2px solid #89b4f4;
  margin-bottom: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
  color: #2f6fcc;
  margin: 0;
  margin-bottom: 20px;
`;

export const StatList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const StatItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props => props.backgroundColor || '#ffdfb8'};
  border: 2px solid #89b4f4;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #2f6fcc;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #2f6fcc;
`;
