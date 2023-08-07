import React from "react";
import Image from "next/image";
import petSittingImg from "../images/petsitting.jpg";
import petWalkingImg from "../images/petwalking.jpg";
import bannerImg from "../images/banner.jpg";
import Link from "next/link";
import styles from "../styles/banner.module.css";

const Banner = () => {
  return (
    <div
      className={`flex items-center bg-gray-200 text-white overflow-hidden h-80vh ${styles.bannerContainer}`}
    >
      <div className="flex-1 p-10 relative z-10">
        <h1 className="mb-2 text-3xl font-bold text-dark">Of course!</h1>
        <p className="text-lg text-dark">We&apos;ll do it for you</p>

        <div className="flex mt-5 gap-1 flex-col md:flex-row md:gap-6">
          <div className={`flex-1 ${styles.service}`}>
            <Link href="/petsitting">
              <Image
                className="rounded-md"
                src={petSittingImg}
                alt="Pet Sitting"
                width={200}
                height={150}
                objectFit="cover"
              />
            </Link>
            <p className="mt-2 text-lg font-semibold text-dark">
              Pet Sitting Service
            </p>
          </div>

          <div className={`flex-1 ${styles.service} mt-4 md:mt-0`}>
            <Link href="/petwalking">
              <Image
                className="rounded-md"
                src={petWalkingImg}
                alt="Pet Walking"
                width={200}
                height={150}
                objectFit="cover"
              />
            </Link>
            <p className="mt-2 text-lg font-semibold text-dark">
              Pet Walking Service
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={bannerImg}
          alt="bannerImg"
          width={1952}
          height={1098}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Banner;
