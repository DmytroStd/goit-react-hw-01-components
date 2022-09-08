import PropTypes from 'prop-types';
import styles from './Friends.module.css'

const FriendsItem = ({ isOnline = false, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.status}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendsItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsItem;