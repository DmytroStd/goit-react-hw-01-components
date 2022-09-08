import PropTypes from 'prop-types';
import FriendItem from './FriendItem';
// import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <div className="container">
      <ul className="">
        {friends.map(item => (
          <FriendItem
            key={item.id}
            isOnline={item.isOnline}
            avatar={item.avatar}
            name={item.name}
          />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;