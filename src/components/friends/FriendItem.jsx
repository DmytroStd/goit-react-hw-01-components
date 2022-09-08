import PropTypes from 'prop-types';

const FriendsItem = ({ isOnline = false, avatar, name }) => {
  return (
    <li className="">
      <span className="">{isOnline}</span>
      <img className="" src={avatar} alt="User avatar" width="48" />
      <p className="">{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsItem;