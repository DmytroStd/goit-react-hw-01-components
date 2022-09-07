import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';


const Statistic = ({ title, stats }) => {
  return (
    <div className="container">
      <section className="">
        {title && <h2 className="">{title}</h2>}
        <ul className="">
          {stats.map(item => (
            <StatisticItem
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          ))}
        </ul>
       </section>
    </div>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistic;