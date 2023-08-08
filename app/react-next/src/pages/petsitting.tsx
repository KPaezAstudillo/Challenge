import React from "react";
import Image from "next/image";
import petSittingImage from "../app/images/bookpetsitting.png";
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from "@/app/store/nextSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

interface AddToCartPayload {
  serviceName: string;
  price: number;
}

const PetSitting = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    const service: AddToCartPayload = { serviceName: "Pet Sitting", price: 6 };
    dispatch(addToCart(service));
    router.push("/cart");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-10">
        <div className="flex-1 md:mb-5">
          <Image
            src={petSittingImage}
            alt="Pet Sitting"
            width={946}
            height={630}
            objectFit="cover"
          />
        </div>
        <div className="flex-1 md:ml-5 info-container bg-gray-200 rounded p-5">
          <h2 className="text-lg font-semibold">
            Here&apos;s what you should know
          </h2>
          <ul className="my-3">
            <li>Provide clear feeding instructions.</li>
            <li>Leave emergency contact information.</li>
            <li>Provide your pet&apos;s favorite toys.</li>
          </ul>
          <h2 className="text-lg font-semibold">
            If you are ready, then we are!{" "}
          </h2>
          <label htmlFor="calendar" className="block mt-3">
            Select a date:
          </label>
          <input
            type="date"
            id="calendar"
            name="calendar"
            className="w-full py-2 px-3 border rounded mt-1"
          />
          <label htmlFor="time" className="block mt-3">
            Select a time:
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="w-full py-2 px-3 border rounded mt-1"
          />
          <label htmlFor="time" className="block mt-3">
            Specify extension:
          </label>
          <div className="flex items-center">
            <input
              type="number"
              id="extension"
              name="time"
              min="1"
              className="py-2 px-3 border rounded mt-1 mr-2"
            />
            <span className="text-gray-600">Hours</span>
          </div>
          <p className="text-lg font-semibold text-gray-600 mt-3">
            Price: $6/hour
          </p>
          <button
            onClick={handleAddToCart}
            className="flex items-center justify-center mt-4 px-6 py-2 bg-dark text-white rounded cursor-pointer"
          >
            <FaShoppingCart className="mr-2" />
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default PetSitting;
