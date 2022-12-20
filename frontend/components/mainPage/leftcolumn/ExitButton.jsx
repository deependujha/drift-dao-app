import React from 'react'
import Image from "next/image";


const ExitButton = () => {
  return (
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
  );
}

export default ExitButton