import React, { useState } from 'react';
import { CardElement } from '@stripe/react-stripe-js';

const PaymentForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const stripe = {}; // Your stripe instance here

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'amount') setAmount(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(''); // Reset success message
    setErrorMessage('');   // Reset error message

    try {
      // Your submission logic here
      // Simulate successful submission
      setTimeout(() => {
        setLoading(false);
        setSuccessMessage('Your wallet has been successfully funded!');
        setModalOpen(false); // Close the modal after submission
      }, 2000); // Simulating a delay
    } catch (error) {
      setLoading(false);
      setErrorMessage('There was an error processing your payment. Please try again.');
    }
  };

  return (
    <div>
      <button 
        onClick={() => setModalOpen(true)} 
        className="bg-btn mt-4 rounded-sm text-white p-4 font-bold text-xl"
      >
        Add Fund
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-60">
            <h2 className="text-3xl mb-6">Fund Your Wallet</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-2 font-bold text-gray-700 text-xl">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="amount" className="mb-2 font-bold text-gray-700 text-xl">Amount to Deposit</label>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  value={amount}
                  onChange={handleChange}
                  placeholder="Amount"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-bold text-gray-700 text-xl">Card Details</label>
                <CardElement className="p-3 border border-gray-300 rounded-md" />
              </div>
              <button
                type="submit"
                disabled={!stripe || loading}
                className="w-full py-3 px-4 mt-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg font-bold"
              >
                {loading ? 'Processing...' : 'Fund Wallet'}
              </button>
            </form>
            {successMessage && (
              <p className="mt-4 text-green-600 font-bold text-lg">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="mt-4 text-red-600 font-bold text-lg">{errorMessage}</p>
            )}
            <button onClick={() => setModalOpen(false)} className="mt-4 text-red-500 font-bold text-xl">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
