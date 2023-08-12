import SocialLogin from "@/components/SocialLogin/SocialLogin";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div
      className="hero"
      style={{
        background: `url('/images/login.jpg')`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero min-h-screen container mx-auto">
        <div className="flex w-full justify-around flex-col lg:flex-row">
          <div className="text-center max-w-lg text-slate-300">
            <h1 className="text-3xl font-bold">Welcome to</h1>
            <h1 className="text-5xl font-bold">Dolphin Stationery</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <div className="flex flex-col lg:flex-row lg:justify-between">
                  <label className="label">
                    <Link href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </Link>
                  </label>
                  <label className="label">
                    <Link href="/register" className="label-text-alt link link-hover">
                      Don't have account?
                    </Link>
                  </label>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline btn-primary">Login</button>
              </div>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
