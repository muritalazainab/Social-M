import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import { useLocation } from 'react-router-dom';

// Ensure you replace 'your-publishable-key-here' with your actual public key
const stripePromise = loadStripe('pk_test_51PqYk2KUYKxDqxIbYXbpp4KvQiSRSBEY2F7ISEHqCTsrP0mrKWhJ8mazcIOljedKjzH9ckSRKZvCMiyxW1R2VVgq003VmA2wVu');

const StripeWrapper = ({ isOpen, setModalOpen }) => {
  const location = useLocation();
  const initialBalance = location.state?.walletBalance || 0;

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm initialBalance={initialBalance} isOpen={isOpen} setModalOpen={setModalOpen} />
    </Elements>
  );
};

export default StripeWrapper;
