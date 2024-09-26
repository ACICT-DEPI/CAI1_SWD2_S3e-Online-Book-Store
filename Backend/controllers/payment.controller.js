import Order from "../models/order.model.js";
import { stripe } from "../utils/stripe.js";

export const createCheckoutSession = async (req, res) => {
  try {
    const { books } = req.body;

    if (!Array.isArray(books) || books.length === 0) {
      return res.status(400).json({ error: "Invalid or empty products array" });
    }

    let totalAmount = 0;

    const lineItems = books.map((book) => {
      const amount = Math.round(book.price * 100);
      totalAmount += amount * book.quantity;

      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: book.title,
            images: [book.image],
          },
          unit_amount: amount,
        },
        quantity: book.quantity || 1,
      };
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CLIENT_URL}/payment-cancel`,
      discounts: [],
      metadata: {
        userId: req.user._id.toString(),
        couponCode: "",
        products: JSON.stringify(
          books.map((b) => ({
            id: b._id,
            quantity: b.quantity,
            price: b.price,
          }))
        ),
      },
    });
    res.status(200).json({ id: session.id, totalAmount: totalAmount / 100 });
  } catch (error) {
    console.error("Error processing checkout:", error);
    res
      .status(500)
      .json({ message: "Error processing checkout", error: error.message });
  }
};

export const checkoutSuccess = async (req, res) => {
  try {
    const { sessionId } = req.body;
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status === "paid") {
      if (session.metadata.couponCode) {
        await Coupon.findOneAndUpdate(
          {
            code: session.metadata.couponCode,
            userId: session.metadata.userId,
          },
          {
            isActive: false,
          }
        );
      }

      // create a new Order
      const products = JSON.parse(session.metadata.products);
      const newOrder = new Order({
        user: session.metadata.userId,
        books: products.map((product) => ({
          book: product.id,
          quantity: product.quantity,
          price: product.price,
        })),
        totalAmount: session.amount_total / 100, // convert from cents to dollars,
        stripeSessionId: sessionId,
      });

      await newOrder.save();

      res.status(200).json({
        success: true,
        message: "Payment successful, order created.",
        orderId: newOrder._id,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Payment failed. Please try again.",
      });
    }
  } catch (error) {
    console.error("Error processing successful checkout:", error);
    res.status(500).json({
      message: "Error processing successful checkout",
      error: error.message,
    });
  }
};
