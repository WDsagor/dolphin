"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import SocialLogin from "@/components/SocialLogin/SocialLogin";

const page = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const [passwordEye, setPasswordEye] = useState(false);
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handlePassSee = () => {
    setPasswordEye(!passwordEye);
  };
  const handleConPassSee = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  const password = watch("password");
  const onSubmit = () => {};
  return (
    <div
      className="hero"
      style={{
        background: `url('/images/login.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero min-h-screen container mx-auto">
        <div className="flex w-full justify-around flex-col lg:flex-row pt-24">
          <div className="text-center max-w-lg text-slate-300">
            <h1 className="text-3xl font-bold">Welcome to</h1>
            <h1 className="text-5xl font-bold">Dolphin Stationery</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className=" card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label ">
                    <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-400">Name</span>
                  </label>
                  <input
                    {...register("name", {
                      required: true,
                    })}
                    type="text"
                    placeholder="Enter your full name"
                    className="input input-bordered"
                  />
                  {errors.name?.type === "required" && (
                    <small className=" text-red-400 mt-1 self-end label-text-alt ">Name is required</small>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-400">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                    type="email"
                    placeholder="Your email"
                    className="input input-bordered "
                  />
                  {errors.email?.type === "required" && (
                    <small className=" text-red-400 mt-1 self-end label-text-alt">Email is required</small>
                  )}
                  {errors.email?.type === "pattern" && (
                    <small className=" text-red-400 mt-1 self-end label-text-alt">Your email is invalid</small>
                  )}
                </div>
                <div className="form-control relative">
                  <label className="label">
                    <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-400">Password</span>
                  </label>
                  <div className=" relative flex flex-col">
                    <input
                      {...register("password", {
                        required: true,
                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/,
                      })}
                      type={passwordEye === false ? "password" : "text"}
                      placeholder="Password"
                      className="input input-bordered w-full"
                    />

                    <div className="text-xl absolute top-4 right-5">
                      {passwordEye === false ? (
                        <AiFillEyeInvisible onClick={handlePassSee} />
                      ) : (
                        <AiFillEye onClick={handlePassSee} />
                      )}
                    </div>
                    {errors.password?.type === "required" && (
                      <small className=" text-red-400 mt-2 self-end label-text-alt">Password is required</small>
                    )}
                    {errors.password?.type === "pattern" && (
                      <small className=" text-red-400 mt-2 self-end label-text-alt">
                        Min 6 character in number, capital and small letter{" "}
                      </small>
                    )}
                  </div>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text after:content-['*'] after:ml-0.5 after:text-red-400">
                      Confirm Password
                    </span>
                  </label>
                  <div className=" relative flex flex-col">
                    <input
                      {...register("confirm", {
                        required: true,
                        validate: (value) => value === password,
                      })}
                      type={confirmPasswordEye === false ? "password" : "text"}
                      placeholder="Confirm Password"
                      className="input input-bordered w-full"
                    />

                    <div className="text-xl absolute top-4 right-5">
                      {confirmPasswordEye === false ? (
                        <AiFillEyeInvisible onClick={handleConPassSee} />
                      ) : (
                        <AiFillEye onClick={handleConPassSee} />
                      )}
                    </div>
                    {errors.confirm?.type === "required" && (
                      <small className=" text-red-400 mt-2 self-end label-text-alt">Password is required</small>
                    )}
                    {errors.confirm?.type === "validate" && (
                      <small className=" text-red-400 mt-2 self-end label-text-alt">Passwords do not match</small>
                    )}
                  </div>
                </div>
                <div className="flex  justify-end">
                  <label className="label">
                    <Link href="/login" className="label-text-alt link link-hover">
                      Have an account?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" value="register" className="btn btn-primary btn-outline" />
                </div>
              </form>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
