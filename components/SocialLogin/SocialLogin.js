import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="py-5 text-center">
      <p>or you can login with</p>

      <div className="flex gap-3 justify-center py-2 text-blue-600">
        <FaFacebook className="text-green cursor-pointer" size={30} />
        <FcGoogle className="cursor-pointer" size={30} />
      </div>
    </div>
  );
};

export default SocialLogin;
