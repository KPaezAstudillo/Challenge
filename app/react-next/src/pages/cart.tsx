import React from "react";
import { useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { RootState } from "@/app/store/store";
import Link from "next/link";

const stripePromise = loadStripe(
  "pk_test_51NcHhFGdAKwOznmKeboeklL2gABmC4RDt4ldXlK9z4CubEYl0h0jGPVbnhen4e2CDivtzaoPawcrp0LnK9hw3kot00x2yLw47r"
);

function CheckoutForm() {
  const state = useSelector((state: RootState) => state);
  const serviceData = state.next.serviceData;
  const total = serviceData.reduce((acc, item) => acc + item.price, 0);

  const stripe = useStripe();
  const elements = useElements();

  const handleCheckout = async () => {
    if (!stripe || !elements) {
      // logic for stripe not loaded
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (cardElement) {
      const result = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });
      if (result.error) {
        console.error(result.error);
      } else {
        //server-side logic to handle the payment
        console.log(result.paymentMethod);
      }
    }
  };
  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      {serviceData.length === 0 ? (
        <>
          <p className="text-center text-lg">Your cart is empty.</p>
          <Link href="/main">
            <p className="text-center text-dark hover:text-yellow my-5">
              Go back to main page
            </p>
          </Link>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {serviceData.map((item, index) => (
            <div key={index} className="border p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{item.serviceName}</h3>
              <p className="text-gray-600">Price: ${item.price}</p>
            </div>
          ))}
        </div>
      )}
      {serviceData.length > 0 && (
        <div className="mt-8">
          <h3 className="text-xl font-bold">Total Price: ${total}</h3>
          <div className="mt-4">
            <CardElement options={{ style: { base: { fontSize: "16px" } } }} />
          </div>
          <button
            className="my-4 bg-dark text-white px-4 py-2 rounded"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default function CartPage() {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
}
