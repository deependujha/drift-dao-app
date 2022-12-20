import React from "react";
import Image from "next/image";

const LeftCol = () => {
  return (
    <div className="sticky top-0 w-36 h-screen">
      <div className="pt-16 grid justify-items-center text-center">
        <div className="my-4">
          <Image
            src="/mainPageLogo/polygon.png"
            height={50}
            width={60}
            alt="myDao"
            className="bg-white rounded-lg mb-1"
          />
          Polygon
        </div>
        <div className="my-4">
          <Image
            src="/mainPageLogo/ens.png"
            height={50}
            width={60}
            alt="myDao"
            className="bg-white rounded-lg mb-1"
          />
          ENS
        </div>
        <div className="my-4">
          <Image
            src="/mainPageLogo/bico.png"
            height={50}
            width={60}
            alt="myDao"
            className="bg-white rounded-lg mb-1"
          />
          Biconomy
        </div>
      </div>
      <div className="absolute bottom-20 right-12">
        <a href="#">
          <Image
            src="/mainPageLogo/forward-button.png"
            height={50}
            width={50}
            alt="load..."
          />
        </a>
      </div>
    </div>
  );
};

export default LeftCol;
