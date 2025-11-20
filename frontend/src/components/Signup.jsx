import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/signup", {
        fullname,
        email,
        username,
        password,
      });

      alert("Signup Successful!");
      navigate("/login");
    } catch (error) {
      console.log("Signup Error:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white w-[380px] p-8 rounded-2xl ">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>

        <form onSubmit={handlesubmit}>
          <label className="text-sm font-semibold">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 mt-1 border rounded-lg bg-gray-50"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <label className="text-sm font-semibold mt-4 block">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mt-1 border rounded-lg bg-gray-50"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sm font-semibold mt-4 block">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 mt-1 border rounded-lg bg-gray-50"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label className="text-sm font-semibold mt-4 block">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mt-1 border rounded-lg bg-gray-50"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <p className="text-xs text-gray-600 mt-3">
            I agree to all Terms, Privacy Policy and fees
          </p>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 mt-4 rounded-lg font-semibold hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center gap-3 my-4">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="text-gray-500 text-sm">OR</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>

        <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
            className="w-5"
          />
          Sign in with Google
        </button>

        <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 mt-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            className="w-5"
          />
          Sign in with Facebook
        </button>

        <p className="text-center text-sm mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
