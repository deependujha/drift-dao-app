import React from "react";
import { Navbar, Button } from "flowbite-react";

const Navbar_01 = ({ currLeft, currRight }) => {
  return (
    <Navbar fluid={true} rounded={false} className="sticky top-0 bg-zinc-900" style={{height:"7vh"}}>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
          Drift
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button outline={true} gradientDuoTone="purpleToBlue">
          candidate name
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <div className="text-xl  text-blue-500">
          {currLeft} - {currRight}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar_01;
