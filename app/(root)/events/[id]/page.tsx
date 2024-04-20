import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center">
      <Image src="/assets/qwe.jpeg" width={700} height={700} alt="image" />
    </div>
  );
};

export default page;
