import React, { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "./auth/auth";
import styles from "../styles/banner.module.css";
import { useDispatch } from "react-redux";
import { setUserEmail } from "@/app/store/nextSlice";


const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const { login } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (login(email)) {
      dispatch(setUserEmail(email));
      router.push("/main");
    } else {
      alert("Invalid email format");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label htmlFor="username" className="block mb-1 font-medium">
            Email (any email will work)
          </label>
          <input
            type="text"
            id="username"
            className="w-full border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          className="w-full bg-dark text-white p-2 rounded"
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
