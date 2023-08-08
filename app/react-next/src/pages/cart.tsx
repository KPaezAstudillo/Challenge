import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { RootState } from "@/app/store/store";
import Link from "next/link";
import { setServiceData } from "@/app/store/nextSlice";
import { FaTrash } from "react-icons/fa";

const stripePromise = loadStripe(
  "pk_test_51NcHhFGdAKwOznmKeboeklL2gABmC4RDt4ldXlK9z4CubEYl0h0jGPVbnhen4e2CDivtzaoPawcrp0LnK9hw3kot00x2yLw47r"
);

function CheckoutForm() {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);
  const serviceData = state.next.serviceData;
  const total = serviceData.reduce((acc, item) => acc + item.price, 0);

  const stripe = useStripe();
  const elements = useElements();

  interface AddToCartPayload {
    serviceName: string;
    price: number;
  }
  

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

  const deleteService = (serviceToDelete: { serviceName: string }) => {
    const updatedServiceData = serviceData.filter(
      (service) => service.serviceName !== serviceToDelete.serviceName
    );
    dispatch(setServiceData(updatedServiceData));
  }

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
              <div className="flex justify-between">
              <h3 className="text-xl font-bold mb-2">{item.serviceName}</h3>
              <button onClick={() => deleteService(item)}><FaTrash /></button>           
              </div>
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
