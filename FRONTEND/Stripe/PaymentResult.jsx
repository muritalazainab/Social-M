// src/components/PaymentResult.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentResult = () => {
  const location = useLocation();
  const { success, amount, errorMessage } = location.state || {};

  return (
    <div className="p-8">
      {success ? (
        <>
          <h2 className="text-3xl font-semibold mb-4">Payment Successful!</h2>
          <p className="text-xl">
            Your wallet has been successfully funded with ${amount}.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-3xl font-semibold mb-4 text-red-500">Payment Failed</h2>
          <p className="text-xl text-red-500">{errorMessage || 'An error occurred during the payment process.'}</p>
        </>
      )}
    </div>
  );
};

export default PaymentResult;
