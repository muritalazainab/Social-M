import React, { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

const apiKey = import.meta.env.VITE_STRIPE_KEY;

const PaymentForm = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const DepositFunds = async (payload) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:3500/payments/deposit-funds",
        {
          token: payload,
          amount: parseFloat(amount),
        }
      );
      if (data.status === "success") {
        setModalOpen(false);
        // showToast("Success", `${}`, "success");
        setAmount("")
        toast.success(data.message);
        console.log(data);
      }
      return data;
    } catch (error) {
      console.log("Backend error:", error);
      return error.response.data;
    } finally {
      setLoading(false);
    }
  };

  const onToken = async (token) => {
    try {
      console.log("Token received:", token);
      console.log("Amount to deposit (dollars):", amount);
      const response = await DepositFunds(token);

      // const newBalance = user.balance + response.data.amount;
      if (response.success) {
        setModalOpen(false);
        // showToast("Success", `${}`, "success");
        toast.success(response.message);
         // Get user from localStorage
      const storedUser = localStorage.getItem("user-socialM");
      let user = storedUser ? JSON.parse(storedUser) : null;

      console.log(response)
      if (user) {
        // Ensure the balance and depositAmount are numbers
        const currentBalance = parseFloat(user.balance) || 0; // Set default balance to 0 if NaN
        const depositAmount = parseFloat(amount) || 0; // Default to 0 if NaN or undefined

        // Calculate the new balance
        const newBalance = currentBalance + depositAmount;
        console.log("New Balance:", newBalance);

        // Update the user object with the new balance
        const updatedUser = { ...user, balance: newBalance };
        console.log("Updated User:", updatedUser);

        
        // Save the updated user back to localStorage
        localStorage.setItem("user-socialM", JSON.stringify(updatedUser));
        
        setAmount("")
      }
      } else {
        // showToast("Error", `${}`, "error");
        toast.error(response.message);
      }
    } catch (error) {
      console.log("Error in onToken:", error);
      toast.error(error.message);
      // showToast("Error", `${}`, "error");
    }
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (isNaN(value) || value <= 0) {
      // showToast("Error", , "error");
      toast.error("Please enter a valid amount greater than $0.50");
      setAmount("");
    } else {
      setAmount(value);
    }
  };

  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-black font-bold text-xl py-2 px-8 mt-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Add Fund
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-300 ease-in-out">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-800 text-center">
              Fund Your Wallet
            </h2>
            <form className="space-y-6">
              {/* <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="mb-2 font-bold text-gray-700 text-xl"
                >
                  Email
                </label>
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
              </div> */}

              <div className="flex flex-col">
                <label
                  htmlFor="amount"
                  className="mb-2 font-semibold text-gray-700 text-lg"
                >
                  Amount to Deposit
                </label>
                <input
                  id="amount"
                  name="amount"
                  type="number"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="Amount"
                  className="p-3 border border-gray-300 mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg transition duration-300 ease-in-out"
                  required
                />
              </div>

              <StripeCheckout
                token={onToken}
                currency="USD"
                amount={parseFloat(amount) * 100} // Convert the amount to cents for Stripe
                shippingAddress
                billingAddress
                stripeKey={apiKey}
              >
                <button
                  type="submit"
                  disabled={!amount || loading}
                  onClick={(e) => e.preventDefault()}
                  className={`w-full py-4 px-6 rounded-lg bg-indigo-600 text-white text-lg font-bold transition duration-300 ease-in-out ${
                    !amount
                    ? "bg-gray-400"
                      : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105"
                  }`}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Fund Wallet"
                  )}
                </button>
              </StripeCheckout>
            </form>
            {successMessage && (
              <p className="mt-4 text-green-600 font-bold text-lg">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="mt-4 text-red-600 font-bold text-lg">
                {errorMessage}
              </p>
            )}
            <button
              onClick={() => setModalOpen(false)}
              className="mt-4 text-red-500 font-bold text-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
