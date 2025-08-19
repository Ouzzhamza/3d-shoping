"use client";

import { Login } from "@/types/global";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { MdMail } from 'react-icons/md'; 
    



function page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Login>();

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data: Login) => {
    setIsLoading(true);

    try {
      // Simulate API call
      console.log("Login data:", data);

      // Example:
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });

      // Simulate loading delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Login successful!");
      reset();
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

    const handleSocialLogin = (provider: any) => {
      
      console.log(`Login with ${provider}`);
      
    };


  return (
    <section className="max-padd-container mt-28 pb-24 flex justify-center items-center h-screen">
      <div className="w-[600px] h-[650px] border-[1px] border-primary rounded-3xl flex justify-center items-center backdrop-blur-3xl">
        {/* Title */}
        <div className="relative w-full max-w-md h-full flex flex-col justify-center items-center gap-10">
          <div className="text-center mb-6">
            <p className="text-gray-400">
              Don't have an account yet?{" "}
              <button className="text-white hover:text-primary transition-colors">
                Sign up
              </button>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* Email Field */}
            <div>
              <div className="relative">
                <MdMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="email"
                  placeholder="email address"
                  className={`w-full bg-gray-800/50 border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className={`w-full bg-gray-800/50 border ${
                    errors.password ? "border-red-500" : "border-gray-700"
                  } rounded-lg pl-10 pr-12 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all`}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
                >
                  {showPassword ? (
                    <LuEyeClosed className="w-5 h-5" />
                  ) : (
                    <LuEye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary hover:bg-highlight-light disabled:bg-primary-dark text-black font-medium py-3 px-4 rounded-3xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Logging in...
                </div>
              ) : (
                "Login"
              )}
            </button>
          </form>
          <div>
            <button
              onClick={() => handleSocialLogin("google")}
              className="flex-1 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700 rounded-lg py-3 px-4 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <svg className="w-5 h-5 mx-auto" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>
          </div>
          {/* Forgot Password */}
          <div className="text-center mt-6">
            <button className="text-gray-400 hover:text-primary text-sm transition-colors">
              Forgot your password?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
