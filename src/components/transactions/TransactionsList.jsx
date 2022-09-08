import PropTypes from 'prop-types';
import StansactionItem from './TransactionItem'
import styles from './Transactions.module.css'

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="container">
      <table className={styles.transactionHistory}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>

        <tbody>
            {transactions.map(transaction => (
            <StansactionItem
                key={transaction.id}
                type={transaction.type}
                currency={transaction.currency}
                amount={transaction.amount}
                />
            ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
       id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;