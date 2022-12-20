import React from 'react'
import { Navbar, Button } from 'flowbite-react'
import { motion } from "framer-motion";


const Navbar_01 = ({ currLeft, currRight }) => {
  return (
    <Navbar fluid={true} rounded={false} className="sticky top-0 bg-zinc-900">
      <Navbar.Brand href="/">
        <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.9 }}>
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            Drift
          </span>
        </motion.div>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button size="lg" outline={true} gradientDuoTone="purpleToBlue">
          candidate name
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <div className="text-xl italic text-white">
          {currLeft}__{currRight}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar_01