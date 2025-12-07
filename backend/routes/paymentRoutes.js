const express = require("express");
const Stripe = require("stripe");
const router = express.Router();

const stripe = Stripe(process.env.STRIPE_SECRET);

router.post("/checkout", async (req, res) => {
  const { title, price } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: { name: title },
            unit_amount: price * 100 // convert ₹ to paise
          },
          quantity: 1
        }
      ],
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}`
    });

    res.json({ url: session.url });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Stripe Error", error: err.message });
  }
});

module.exports = router;
