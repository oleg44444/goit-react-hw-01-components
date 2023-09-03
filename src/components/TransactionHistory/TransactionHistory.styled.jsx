import styled from '@emotion/styled';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border: 2px solid #ddd;
`;

export const TableHeader = styled.th`
  background-color: #f5f5f5;
  padding: 15px;
  text-align: left;
  border-bottom: 2px solid #ddd;
  font-weight: bold;
`;

export const TableRow = styled.tr`
  background-color: ${props => (props.isEven ? '#f2f2f2' : '#fff')};
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;
