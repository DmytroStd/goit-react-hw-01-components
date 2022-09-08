import PropTypes from 'prop-types';
import StansactionItem from './TransactionItem'

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="container">
      <table class="transaction-history">
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
      id: PropTypes.number.isRequired,
    })
  ),
};

export default TransactionHistory;