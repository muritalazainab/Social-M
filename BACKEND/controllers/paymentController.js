const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { uuid } = require("uuidv4");
const User = require("../models/userModel");
const transactionModel = require("../models/transactionModel");

const depositFunds = async (req, res) => {
  try {
    // const userId = req.params.userId;
    const { token, amount } = req.body;

    console.log(token);
    console.log(amount);
    const parsedAmount = parseFloat(amount);

    // Validate the amount
    if (isNaN(parsedAmount) || parsedAmount < 0.5) {
      return res.status(400).json({
        message: "Transaction failed",
        data: "Amount must be at least $0.50 USD",
        success: false,
      });
    }

    // Convert amount to cents for Stripe
    const amountInCents = Math.round(parsedAmount * 100);
    console.log("Amount in cents:", amountInCents); // Log amount in cents

    // Create a customer
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    console.log("Customer created:", customer.id); // Log customer ID

    // Create a charge
    const charge = await stripe.charges.create(
      {
        amount: amountInCents,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Deposited to SocialM`,
      },
      {
        idempotencyKey: uuid(),
      }
    );
    console.log("Charge created:", charge.status); // Log charge status

    // Save the transaction
    if (charge.status === "succeeded") {
      const email = token.email;
      const user = await User.findOne({
        email: email,
      });
      if (!user) {
        return res.status(404).json({
          message: "User not found",
          success: false,
        });
      }

      const currentBalance = isNaN(user.balance) ? 0 : Number(user.balance);
      const newBalance = currentBalance + parsedAmount;

      // Save the new balance to the user document
      user.balance = newBalance;
      await user.save(); // This saves the updated user balance in the database

      const newTransaction = new transactionModel({
        user: user._id,
        amount: parsedAmount,
        type: "deposit",
        reference: "stripe deposit",
        status: "success",
      });

      console.log(user);
      console.log(newTransaction);
      await newTransaction.save();

      res.send({
        message: `Deposit of $${amount} successful`,
        data: newTransaction,
        success: true,
      });
    } else {
      res.send({
        message: "Transaction failed",
        data: charge,
        success: false,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      message: "Transaction failed",
      data: error.message,
      success: false,
    });
  }
};

const processPayment = async (req, res) => {
  try {
    // Destructure email, amount, and token from the request body
    const { email, amount, token } = req.body;

    // Check if any of the required fields are missing
    if (!email || !amount || !token) {
      return res
        .status(400)
        .json({ message: "Email, amount, and token are required." });
    }

    // Log the received amount for debugging
    console.log("Received amount (string):", amount);

    // Convert the amount from a string to a number in cents
    const amountInCents = Math.round(parseFloat(amount) * 100);

    // Log the converted amount for debugging
    console.log("Converted amount (number):", amountInCents);

    // Validate the converted amount
    if (amountInCents < 100) {
      return res
        .status(400)
        .json({ message: "Amount must be greater than or equal to 1 USD" });
    }

    // Create a charge with Stripe
    const charge = await stripe.charges.create({
      amount: amountInCents, // Amount in cents
      currency: "usd",
      source: token,
      description: `Deposit by ${email}`,
    });

    // Fetch the user from the database
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update the user's balance
    const depositAmount = parseFloat(amount);
    user.balance = (parseFloat(user.balance) || 0) + depositAmount;

    // Save the updated user data
    await user.save();

    // Send the updated balance in the response
    res.status(200).json({ balance: user.balance });
  } catch (error) {
    // Log the error for debugging
    console.error("Error processing payment:", error);

    // Respond with an error message
    res.status(500).json({ message: "Deposit failed", error: error.message });
  }
};

// Controller function for processing withdrawals
const processWithdrawal = async (req, res) => {
  try {
    const { amount } = req.body;
    const userId = req.user.id; // Assuming user ID is available from authentication

    if (!amount) {
      return res.status(400).json({ message: "Amount is required." });
    }

    // Fetch the user from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const amountInNumber = parseFloat(amount);
    if (user.balance < amountInNumber) {
      return res.status(400).json({ message: "Insufficient funds" });
    }

    // Deduct the amount from the user's balance
    user.balance -= amountInNumber;
    await user.save();

    // Return the updated balance
    res.status(200).json({ balance: user.balance });
  } catch (error) {
    console.error("Error processing withdrawal:", error);
    res
      .status(500)
      .json({ message: "Withdrawal failed", error: error.message });
  }
};

module.exports = { depositFunds, processPayment, processWithdrawal };
