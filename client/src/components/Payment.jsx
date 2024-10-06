import { Button } from "antd";
import StripCheckout from "react-stripe-checkout";

//apis
import { postStripe } from "../services/stripe/stripe";

const Payment = ({ userInfoFunction }) => {
  const postStripeHandler = (data) => {
    postStripe(data)
      .then((res) => {
        userInfoFunction(res);
      })
      .catch(() => {})
      .finally(() => {});
  };

  return (
    <StripCheckout
      name="Emaily mj nouri"
      description="به ازای پرداخت هر 5 دلار، 5 اعتبار دریافت خواهید کرد"
      amount={500}
      token={(token) => {
        postStripeHandler(token);
      }}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <Button>افزودن اعتبار</Button>
    </StripCheckout>
  );
};
export default Payment;
