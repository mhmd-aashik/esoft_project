import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="https://st3.depositphotos.com/4196725/13795/i/1600/depositphotos_137951874-stock-photo-young-funny-man-with-angry.jpg"
        width={700}
        height={700}
        alt="image"
      />
    </div>
  );
};

export default page;
