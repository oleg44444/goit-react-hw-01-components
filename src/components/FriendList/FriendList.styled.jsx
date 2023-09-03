import styled from '@emotion/styled';

export const FriendListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FriendListItem = styled.li`
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 15px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? '#4CAF50' : '#F44336')};
  margin-bottom: 10px;
`;

export const FriendAvatar = styled.img`
  border-radius: 50%;
  width: 48px;
  height: 48px;
`;

export const FriendName = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;
