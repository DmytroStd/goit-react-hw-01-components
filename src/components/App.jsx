import Profile from './profile/Profile';
import user from '../data/user.json';

import Statistic from './statistic/Statistic';
import data from '../data/data.json'

import FriendsList from './friends/FriendsList';
import friends from '../data/friends.json';

import TransactionHistory from './transactions/TransactionsList'
import transactions from '../data/transactions.json';


export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistic title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
// <FriendList friends={friends} />;
//import friends from "path/to/friends.json";

