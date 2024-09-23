require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const connectDB = require("./config/DBconnect");
const errorHandler = require("./controllers/middleware/errorMiddleware");
const userRoute = require("./routes/userRoute");
const campaignerRoute = require("./routes/campaignerRoute");
const adminRoute = require("./routes/adminRoute");
const marketerRoute = require("./routes/marketerRoute");
const payRoute = require("./routes/payRoute");

// const studentRoute = require("./routes/studentRoute")
require("dotenv").config();

const PORT = process.env.PORT || 3500;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    res.header("Access-Control-Allow-Origin", "*");
  }
  next();
});

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS",
  })
);
app.get("/", (req, res) => {
  res.send("Hello Boss!");
});

app.use("/market", marketerRoute);
app.use("/users", userRoute);
app.use("/campaigns", campaignerRoute);
app.use("/admin", adminRoute);
app.use('/payments', payRoute);



app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
 let event;
 try {
  event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
  return res.status(400).send(`Webhook Error: ${err.message}`);
  }
 // Handle the event
  switch (event.type) {
  case 'payment_intent.succeeded':
  const paymentIntent = event.data.object;
  // Handle successful payment
  break;
  default:
  console.log(`Unhandled event type: ${event.type}`);
  }
 res.json({ received: true });
 });



connectDB();

app.use(errorHandler);
mongoose.connection.once("open", () => {
  console.log("Database Connected");

  app.listen(PORT, () => console.log(`Server is 🏃‍♂️💨 on ${PORT}`));
});
