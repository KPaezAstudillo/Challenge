import RootLayout from "@/app/layout";
import React from "react";
import Image from "next/image";
import petWalkingImage from "../app/images/bookpetwalking.jpg"; // Replace with the actual path to your image

const PetWalking = () => {
  return (
    <RootLayout>
      <div className="pet-walking-container">
        <div className="image-container">
          <Image
            src={petWalkingImage}
            alt="Pet Walking"
            width={3865}
            height={2576}
            objectFit="cover"
          />
        </div>
        <div className="info-container">
          <h2>Here's what you should know</h2>
          <ul>
            <li>Make sure your pet is on a leash.</li>
            <li>Bring waste disposal bags.</li>
            <li>Keep your pet hydrated.</li>
            <li>Let us know about any behavior concerns.</li>
          </ul>
          <h2>Are you ready? Book Pet Walking</h2>
          <label htmlFor="calendar">Select a date:</label>
          <input type="date" id="calendar" name="calendar" />
          <label htmlFor="time">Select a time:</label>
          <input type="time" id="time" name="time" />
          <button className="book-button">Book Now</button>
        </div>
      </div>
      <style jsx>{`
        .pet-walking-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px;
        }

        .image-container {
          flex: 1;
        }

        .info-container {
          flex: 1;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 8px;
          margin-left:20px
        }

        .info-container h2 {
          font-size: 1.5rem;
          
        }

        ul {
          margin: 10px 0;
        }

        label {
          display: block;
          margin-top: 10px;
        }

        input {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .book-button {
          display: block;
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </RootLayout>
  );
};

export default PetWalking;
