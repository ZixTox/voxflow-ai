const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
require('dotenv').config();

const app = express();
// Default secret for testing if env not set
const stripe = Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_51MockKeyDoNotUseInProductionButGoodForTesting123');

// Webhook endpoint needs raw body
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // In a real app, verify signature: stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
    // For this mockup, we'll just parse the body
    event = JSON.parse(req.body.toString());
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    console.log('✅ Payment successful for session:', session.id);
    
    // TODO: Send data to n8n webhook
    // await fetch('https://your-n8n-domain.com/webhook/voxflow-purchase', {
    //   method: 'POST',
    //   body: JSON.stringify({ email: session.customer_details.email, plan: session.metadata.plan_type })
    // });
  }

  res.json({ received: true });
});

app.use(express.json());
app.use(cors());

app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const { productName, priceAmount, planType, customDetails } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription', // We assume all plans are monthly subscriptions
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
              description: customDetails || 'VoxFlow AI Monthly Subscription',
            },
            unit_amount: priceAmount * 100, // Stripe expects cents
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      metadata: {
        plan_type: planType // e.g., 'dubbing_pro' or 'custom_leadgen'
      },
      // Since frontend is on GitHub Pages, we redirect back to the live site
      success_url: `${req.headers.origin}/portal?success=true`,
      cancel_url: `${req.headers.origin}/pricing?canceled=true`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Backend server running on port ${PORT}`));
