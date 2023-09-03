import {
  FriendListContainer,
  FriendListItem,
  FriendStatus,
  FriendAvatar,
  FriendName,
} from './FriendList.styled';
import PropTypes from 'prop-types';
export default function FriendList({ friends }) {
  return (
    <FriendListContainer>
      {friends.map(({ avatar, name, id, isOnline }) => (
        <FriendListItem key={id}>
          <FriendStatus isOnline={isOnline}></FriendStatus>

          <FriendAvatar src={avatar} alt="User avatar" width="48" />
          <FriendName>{name}</FriendName>
        </FriendListItem>
      ))}
    </FriendListContainer>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
