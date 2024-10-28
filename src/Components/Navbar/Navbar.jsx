import React from "react";
import image1 from "../../assets/images/profile.png";

const Navbar = () => {
  return (
    <div className="flex justify-between mt-5 mb-5">
      <h1 className="text-[40px] font-bold">Knowledge cafe</h1>
      <div className="w-[60px] h-[60px] rounded-[50%]">
        <img className="h-full w-full rounded-[50%]" src={image1} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
