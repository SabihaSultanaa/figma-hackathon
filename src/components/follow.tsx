import React from "react";
import Image from "next/image";

function Follow() {
  return (
    <>
      <div className="xxs:hidden xl:inline-block">
        <div className="w-full h-[450px] relative z-[-1]">
          <Image
            src={"/follow.png"}
            alt="hero"
            objectFit="cover"
            layout="fill"
          />
         
        </div>

       
        <div className="flex flex-col justify-center items-center gap-[15px] px-[490] py-[125px] absolute 
        top-[3690px] z-[1]">
        <div className="font-bold lg:text-[60px] w-[454px] mx-auto px-4">Our Instagram</div>
        <div className="text-[20px] mx-auto px-4">Follow our store on Instagram</div>
        <button className="w-[200px] h-[64px] rounded-[50px] bg-[#FAF4F4] text-[20px] font-semibold shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mx-auto px-4"> Follow Us</button>

        </div>




      </div>
    </>
  );
}

export default Follow;
