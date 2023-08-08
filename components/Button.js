"use client";
import React, { useState } from "react";

const Button = () => {
  const [clickNow, setClickNow] = useState(false);
  return (
    <button onClick={() => setClickNow(!clickNow)} className="btn">
      Button
    </button>
  );
};

export default Button;
