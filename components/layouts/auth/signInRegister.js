import React from "react";
import Image from "next/image";

const Layout = ({ children, bannerURL, bannerAlt }) => {
  return (
    <div className="grid h-screen grid-cols-12 gap-0">
      <div className="relative hidden md:col-span-6 md:block lg:col-span-7 xl:col-span-8">
        <Image
          src={bannerURL}
          alt={bannerAlt}
          layout="fill"
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="col-span-12 flex items-center justify-center bg-white px-2 text-black md:col-span-6 lg:col-span-5 xl:col-span-4">
        {children}
      </div>
    </div>
  );
};

export default Layout;
