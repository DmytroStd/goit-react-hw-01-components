import PropTypes from 'prop-types';
import styles from './Transactions.module.css'

const TransactionItem = ({ type, amount, currency}) => {
    return (
    <tr>
      <td className={styles.type}>{type}</td>
      <td className={styles.amount}>{amount}</td>
      <td className={styles.currency}>{currency}</td>
    </tr>
)}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionItem;