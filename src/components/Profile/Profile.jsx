import {
  Container,
  Image,
  Title,
  Info,
  Description,
  Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';
import PropTypes from 'prop-types';
export default function Profile({ avatar, username, tag, location, stats }) {
  return (
    <Container className="profile">
      <Description>
        <Image src={avatar} alt={username} className="avatar" />
        <Title>{username}</Title>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsQuantity> {stats.followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsQuantity> {stats.views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsQuantity> {stats.likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </Container>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
