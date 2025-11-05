import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const Stagger = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.from(".box", {
        y: -100,
        opacity: 0,
        scale: 0.5,

        stagger: {
          each: 0.2,
          from: "start",
        },
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="min-h-screen bg-gradient-to-br from-indigo-400 to-pink-400 flex items-center justify-center p-8"
    >
      <div className="flex gap-8">
        <div className="box w-20 h-20 bg-red-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          1
        </div>
        <div className="box w-20 h-20 bg-blue-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          2
        </div>
        <div className="box w-20 h-20 bg-green-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          3
        </div>
        <div className="box w-20 h-20 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          4
        </div>
        <div className="box w-20 h-20 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          4
        </div>
        <div className="box w-20 h-20 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          4
        </div>
        <div className="box w-20 h-20 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          4
        </div>
        <div className="box w-20 h-20 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          4
        </div>
        <div className="box w-20 h-20 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          4
        </div>
        <div className="box w-20 h-20 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          4
        </div>
        <div className="box w-20 h-20 bg-purple-500 rounded-xl shadow-lg flex items-center justify-center text-white text-2xl font-bold">
          4
        </div>
      </div>
    </div>
  );
};

export default Stagger;
