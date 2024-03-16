import Stripe from "stripe";

const stripe = require("stripe")(process.env.NEXT_STRIPE_SECRET_KEY);

const webhooks = () => {
  return (
    <div>webhooks</div>
  )
}