import React from "react";
import logo from "../../assets/images/readLogo.png";
import image1 from "../../assets/images/boy2.png";

const Card = ({ imgSrc, name, time, handleMarkAsRead, handleBookmark }) => {
  console.log(imgSrc);
  return (
    <div className="p-3 border-black bg-gray-100 rounded-md">
      {/* Image container */}
      <div>
        <img
          className="w-full h-full rounded-2xl"
          src={imgSrc}
          alt="card image"
        />
      </div>

      {/* writter info */}

      <div className="flex justify-between mt-5 border border-blue-500 rounded-md p-4">
        <div className="flex gap-[80px]">
          <div className="w-[60px] h-[60px] rounded-[50%] flex ">
            <img className="h-full w-full rounded-[50%]" src={image1} alt="" />
          </div>

          <div className="flex flex-col justify-between">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-gray-500">{"Mar 14 (4days ago)"}</p>
          </div>
        </div>

        {/* read info */}
        <div className="flex items-center gap-2">
          <p>{time + "min read"}</p>
          <div className="h-5 w-5">
            <img
              className="h-full w-full"
              src={logo}
              alt=""
              onClick={handleBookmark}
            />
          </div>
        </div>
      </div>

      {/* card title */}

      <div className="border border-purple-500 rounded-md p-3 mt-5">
        <h1 className="text-4xl font-bold ">
          How to get your first job as a self-taught programmer
        </h1>
        <p className="text-gray-500 mt-4">#beginner #programming</p>

        {/* mark read */}
        <div
          className="text-blue-900 border rounded-md bg-blue-300 w-fit px-3 py-2 mt-2"
          onClick={() => {
            handleMarkAsRead(time);
          }}>
          Mark as read
        </div>
      </div>
    </div>
  );
};

export default Card;
