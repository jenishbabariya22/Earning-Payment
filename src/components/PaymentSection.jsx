import { useState } from 'react';

const PaymentSection = ({ payments, setPayments }) => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('unpaid');
  const [paymentDate, setPaymentDate] = useState('');

  const handleAddPayment = () => {
    const amount = parseFloat(paymentAmount);
    if (!isNaN(amount) && paymentDate) { // Ensure date is provided
      setPayments([...payments, { amount, status: paymentStatus, date: paymentDate }]);
      setPaymentAmount('');
      setPaymentStatus('unpaid');
      setPaymentDate('');
    }
  };

  const markAsPaid = (index) => {
    const updatedPayments = payments.map((payment, idx) =>
      idx === index ? { ...payment, status: 'paid' } : payment
    );
    setPayments(updatedPayments);
  };

  const deletePayment = (index) => {
    const updatedPayments = payments.filter((_, idx) => idx !== index);
    setPayments(updatedPayments);
  };

  return (
    <div className="mt-4">
      <h2>Payments</h2>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          value={paymentAmount}
          onChange={(e) => setPaymentAmount(e.target.value)}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Date (e.g., January)"
          value={paymentDate}
          onChange={(e) => setPaymentDate(e.target.value)}
        />
        <button onClick={handleAddPayment} className="btn btn-primary mt-2">Add Payment</button>
      </div>
      <ul className="list-group">
        {payments.map((payment, index) => (
          <li key={index} className="list-group-item">
            Amount: {payment.amount} - Status: {payment.status} - Date: {payment.date}
            {payment.status === 'unpaid' && (
              <button onClick={() => markAsPaid(index)} className="btn btn-success btn-sm float-end ms-2">Mark as Paid</button>
            )}
            <button onClick={() => deletePayment(index)} className="btn btn-danger btn-sm float-end ms-2">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentSection;
