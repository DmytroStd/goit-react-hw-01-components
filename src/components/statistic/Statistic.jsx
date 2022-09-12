import PropTypes from 'prop-types';
import StatisticItem from './StatisticItem';
import styles from './Statistic.module.css'


const Statistic = ({ title, stats }) => {
  return (
    <div className="container">
      <div className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
          {stats.map(item => (
            <StatisticItem
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          ))}
        </ul>
       </div>
    </div>
  );
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default Statistic;