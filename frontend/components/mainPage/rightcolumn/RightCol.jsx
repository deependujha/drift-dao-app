import React from "react";
import { Card } from "flowbite-react";

const RightCol = ({ currRight, setCurrRight }) => {
  return (
    <div className="sticky top-0 h-screen">
      <div className="grid justify-items-center">
        <div className="max-w-xs mt-44">
          <Card className=" bg-black">
            <ul className=" space-y-4">
              <li
                onClick={() => {
                  setCurrRight("chatroom");
                }}
                className={`${
                  currRight === "chatroom"
                    ? "text-base font-extrabold"
                    : "text-white"
                }`}
                style={{ cursor: "pointer" }}
              >
                <a>Chat room</a>
              </li>
              <li
                onClick={() => {
                  setCurrRight("forum");
                }}
                className={`${
                  currRight === "forum"
                    ? "text-base font-extrabold"
                    : "text-white"
                }`}
                style={{ cursor: "pointer" }}
              >
                <a>forum</a>
              </li>
              <li
                onClick={() => {
                  setCurrRight("RFP");
                }}
                className={`${
                  currRight === "RFP"
                    ? "text-base font-extrabold"
                    : "text-white"
                }`}
                style={{ cursor: "pointer" }}
              >
                <a>RFP</a>
              </li>
              <li
                onClick={() => {
                  setCurrRight("snapshot");
                }}
                className={`${
                  currRight === "snapshot"
                    ? "text-base font-extrabold"
                    : "text-white"
                }`}
                style={{ cursor: "pointer" }}
              >
                <a>snapshot</a>
              </li>
              <li
                onClick={() => {
                  setCurrRight("analytics");
                }}
                className={`${
                  currRight === "analytics"
                    ? "text-base font-extrabold"
                    : "text-white"
                }`}
                style={{ cursor: "pointer" }}
              >
                <a>analytics</a>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RightCol;
