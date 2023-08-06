import RootLayout from "@/app/layout";
import React from "react";
import Image from "next/image";
import petSittingImage from "../app/images/bookpetsitting.png";

const PetSitting = () => {
  return (
    <RootLayout>
      <div className="pet-sitting-container">
        <div className="image-container">
          <Image
            src={petSittingImage}
            alt="Pet Sitting"
            width={946}
            height={630}
            objectFit="cover"
          />
        </div>
        <div className="info-container">
          <h2>Here's what you should know</h2>
          <ul>
            <li>Provide clear feeding instructions.</li>
            <li>Leave emergency contact information.</li>
            <li>Provide your pet's favorite toys.</li>
          </ul>
          <h2>If you are ready, then we are! </h2>
          <label htmlFor="calendar">Select a date:</label>
          <input type="date" id="calendar" name="calendar" />
          <label htmlFor="time">Select a time:</label>
          <input type="time" id="time" name="time" />
          <label htmlFor="time">Specify extension:</label>
          <div className="time-input">
            <input type="number" id="time" name="time" min="1" />
            <span className="time-radio">
              <label>
                <input type="radio" name="timeUnit" value="days" /> Days
              </label>
            </span>
            <span className="time-radio">
              <label>
                <input type="radio" name="timeUnit" value="hours" /> Hours
              </label>
            </span>
          </div>

          <button className="book-button">Book Now</button>
        </div>
      </div>
      <style jsx>{`
        .pet-sitting-container {
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
          margin-left: 20px;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 8px;
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

        .time-input {
          display: flex;
          align-items: center;
        }

        .time-input input {
          margin-right: 5px;
        }
      `}</style>
    </RootLayout>
  );
};

export default PetSitting;
