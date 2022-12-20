import React from "react";
import { Button, Card } from "flowbite-react";

const RightCol = () => {
  return (
    <div className="sticky top-0 h-screen w-64">
      <div className="grid justify-items-center">
        {/* <div className="pt-4">
          <Button outline={true} gradientDuoTone="purpleToBlue">
            candidate name
          </Button>
        </div> */}
        <div className="max-w-xs mt-44">
          <Card className=" bg-black">
            <ul className=" space-y-4">
              <li>
                <a href="#">chat room</a>
              </li>
              <li>
                <a href="#">forum</a>
              </li>
              <li>
                <a href="#">RFP</a>
              </li>
              <li>
                <a href="#">snapshot</a>
              </li>
              <li>
                <a href="#">analytics</a>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RightCol;
