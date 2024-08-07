import Link from "next/link";
import React from "react";

const Recomend = () => {
  return (
    <section className="flex-col justify-between  p-10 sm:p-1  md:p-10 bg-white">
      <h1 className="text-xl sm:text-2xl md:text-3xl text-black m-9">Recently Recommended</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black gap-8 m-4 md:m-10">
        <div>
          <img
            src="bag.jpg"
            className="w-full h-auto"
            alt="Loadin....
            cursor-pointer"
          />
          <h3 className="text-xl">Become an IKEA Business Member</h3>
          <p>
            We're dedicated to helping SMEs thrive. Register to enjoy 11
            exclusive benefits and receive membership gifts available for a
            limited time!
          </p>
          <Link
            href="https://www.ikea.cn/cn/en/ikea-business/business-membership-pub1dcddf27"
            className="cursor-pointer text-blue-600"
          >
            learn more.....
          </Link>
        </div>
        <div>
          <img
            src="person.jpg"
            className="w-full h-auto"
            alt="Loading...IKEA
            cursor-pointer"
          />
          <h3 className="text-xl">
            Join IKEA engineering channel service provider
          </h3>
          <p>
            Let more business partners enjoy IKEA's corporate business products
            and services, and jointly develop a market full of opportunities for
            win-win cooperation!
          </p>
          <Link
            href="https://www.ikea.cn/cn/en/ikea-business/become-an-ikea-construction-channel-service-provider-pub1eca93c4"
            className="cursor-pointer text-blue-500"
          >
            learn more.....
          </Link>
        </div>
        <div>
          <img
            src="irons.jpg"
            className="w-full h-auto"
            alt="Loading...Blue Box
            cursor-pointer"
          />
          <h3 className="text-xl">IKEA Blue Box for a Beautiful Life</h3>
          <p>
            The new IKEA for Business gift box, sending you heartfelt wishes for
            a beautiful life!
          </p>
          <Link
            href="https://www.ikea.cn/cn/en/ikea-business/blue-box-pubdf363414"
            className="cursor-pointer text-blue-500"
          >
            learn more.....
          </Link>
        </div>
        <div>
          <img src="room.gif" className="w-full h-auto" alt="Loading...." />
          <h3 className="text-xl">3D rendering example</h3>
          <p>15㎡ Apartment: Fully Utilizing a Small Space</p>
          <Link
            href="https://www.ikea.cn/cn/en/ikea-business/residential-construction-furnishings/15%E3%8E%A1-apartment-3d-rendering-pubac1b07c2"
            className="cursor-pointer text-blue-500 "
          >
            learn more.....
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Recomend;
