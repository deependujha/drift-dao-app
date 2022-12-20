import React from 'react'
import { Button, Textarea } from "flowbite-react";


const BottomInput = () => {
  return (
    <div className="absolute bottom-4 mx-auto">
      <div className="flex">
        <Textarea
          id="comment"
          className="w-96 h-14"
          placeholder="Leave a comment..."
          required={true}
          rows={4}
        />
        <Button
          size="lg"
          className="my-auto ml-4"
          gradientMonochrome="lime"
        >{`>`}</Button>
      </div>
    </div>
  );
}

export default BottomInput