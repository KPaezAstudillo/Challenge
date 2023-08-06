import React from "react";
import styles from "../styles/banner.module.css";
import Image from "next/image";
import bannerImg from "../images/banner.jpg";
import petSittingImg from "../images/petsitting.jpg";
import petWalkingImg from "../images/petwalking.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.textContainer}>
        <h1>Of course!</h1>
        <p>We'll do it for you</p>

        <div className={styles.serviceContainer}>
          <div className={styles.service}>
            <Link href="/petsitting">
              <Image
                src={petSittingImg}
                alt="Pet Sitting"
                width={200}
                height={150}
                objectFit="cover"
              />
            </Link>
            <p>Pet Sitting Service</p>
          </div>

          <div className={styles.service}>
            <Link href="/petwalking">
              <Image
                src={petWalkingImg}
                alt="Pet Walking"
                width={200}
                height={150}
                objectFit="cover"
              />
            </Link>
            <p>Pet Walking Service</p>
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
