import Profile from './profile/Profile';
import user from '../data/user';

import Statistic from './statistic/Statistic';
import data from '../data/data'



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
    </div>
  );
};
