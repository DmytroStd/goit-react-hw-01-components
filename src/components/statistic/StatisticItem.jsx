import PropTypes from 'prop-types'


    
const StatisticItem = ({ label, percentage }) => {
  return (<li class="item">
    <span class="label">{label}: </span>
    <span class="percentage">{percentage}%</span>
          </li>)
}

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.objectOf(PropTypes.number).isRequired,
}

export default StatisticItem;