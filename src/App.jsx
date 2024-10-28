import React from "react";
import Card from "./Components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import cardImage1 from "./assets/images/2.png";
import Bookmark from "./Components/Bookmark/Bookmark";
import { useState } from "react";

const App = () => {
  const [totalRead, updateRead] = useState(0);
  const [bookMarks, updateBookmarks] = useState([]);
  const handleMarkAsRead = (time) => {
    console.log(time);
    updateRead(totalRead + parseInt(time));
  };

  const handleBookmark = () => {
    console.log("inside handle bookmark");
    const newBookmark = [...bookMarks, 1];
    updateBookmarks(newBookmark);
  };
  return (
    <div>
      <Navbar className="sticky top-8"></Navbar>
      <hr />

      <div className="body-container flex gap-4 mt-5 ">
        {/* cards */}
        <div className="card-container flex flex-col gap-4 overflow-y-scroll">
          <Card
            imgSrc={cardImage1}
            name="MR. Raju"
            time={5}
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}></Card>

          <Card
            imgSrc={cardImage1}
            name="MR. Kaju"
            time={15}
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}></Card>

          <Card
            imgSrc={cardImage1}
            name="MR. Saju"
            time={50}
            handleBookmark={handleBookmark}
            handleMarkAsRead={handleMarkAsRead}></Card>
        </div>

        {/* aside */}

        <div className="flex flex-col  gap-4 w-[500px] overflow-y-scroll">
          {/* read time */}
          <div className="w-full border bg-gray-300 text-xl font-semibold text-blue-700 border-blue-600 text-center rounded-lg py-3">
            Spent time on read:{totalRead} min
          </div>

          <div className="bg-gray-300 p-5 rounded-xl w-full">
            <h1 className="text-xl font-bold">
              Bookmarked blogs :{bookMarks.length}
            </h1>
            <div className="flex flex-col gap-2 mt-3">
              {bookMarks.map(() => (
                <Bookmark></Bookmark>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
