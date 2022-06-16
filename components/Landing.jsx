import React from "react";
import Image from "next/image";
import E from "../images/e-commerce.png";
const Landing = () => {
  return (
    <>
      <div className="flex items-center h-screen overflow-hidden justify-center">
        <div className="flex flex-col md:flex-row">
          <div className="w-1/2">
            <Image src={E} />
          </div>
          <div className="w-1/2 flex items-center">
            <div className="flex flex-col ">
              <div className="text-white ">
                <h1 className="font-medium text-6xl tracking-widest">
                  Welcome to the store!
                </h1>
                <p className="font-thin">Where you will find all your needs!</p>

                <div className="">
                  <div className="flex flex-row mt-5 space-x-10">
                    <div className="w-fit tracking-widest inline-block font-light bg-cyan px-10 py-2 text-sm rounded-2xl text-center text-black hover:cursor-pointer">
                      <p>Login</p>
                    </div>
                    <div className="w-fit tracking-widest inline-block font-light bg-cyan px-10 py-2 text-sm rounded-2xl text-center text-black hover:cursor-pointer">
                      <p>Sign Up</p>
                    </div>
                  </div>

                  <div className="flex flex-row mt-5 space-x-10">
                    <div className="hover:cursor-pointer border border-white rounded-2xl px-10 py-2">
                      <p className="font-thin font-italic  text-white ">
                        Continue as guest.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
