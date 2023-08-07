import React from "react";
import Image from "next/image";
import petWalkingImage from "../app/images/bookpetwalking.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/nextSlice";
import { useRouter } from "next/router";

interface AddToCartPayload {
  serviceName: string;
  price: number;
}

const PetWalking = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    const service: AddToCartPayload = { serviceName: "Pet Walking", price: 10 };
    dispatch(addToCart(service));
    router.push("/cart");
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center p-10">
        <div className="image-container flex-1 mb-5 md:mb-0">
          <Image
            src={petWalkingImage}
            alt="Pet Walking"
            width={3865}
            height={2576}
            objectFit="cover"
          />
        </div>
        <div className="info-container flex-1 p-4 bg-gray-200 rounded ml-5">
          <h3 className="text-lg font-semibold">
            Here&apos;s what you should know
          </h3>
          <ul className="my-3">
            <li>Make sure your pet is on a leash.</li>
            <li>Bring waste disposal bags.</li>
            <li>Keep your pet hydrated.</li>
            <li>Let us know about any behavior concerns.</li>
          </ul>
          <h3 className="text-lg font-semibold">
            Are you ready? Book Pet Walking
          </h3>
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
          <p className="text-xl font-semibold text-gray-600 mt-3">Price: $10</p>
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

export default PetWalking;
