import Image from "next/image";
import React from "react";
import jpImg from "../public/assets/projects/jp-auction.jpg"; // <- update if your image name/path differs
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={jpImg}
          alt="JP Auction Sheet preview"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">JP Auction Sheet</h2>
          <h3>Laravel</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This platform helps car buyers and dealers verify vehicle condition
            using authentic Japanese auction sheets. Built with Laravel and
            hosted on an Ubuntu Droplet (DigitalOcean), it lets users search
            vehicles, view high-resolution auction sheets, and read translated
            inspector notes. Users can add inspection reports to a cart and
            securely pay via Stripe. Accounts are optional—guest checkout is
            supported—but registered users receive promo offers, saved history,
            and faster reorders. The site also includes educational pages on how
            to read auction sheets and showcases testimonials from well-known
            auto importers.
          </p>
          <a
            href="https://jpauctionsheet.com/" // <- replace with your live/demo URL
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>

        <div className="col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Laravel
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> J-Query
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Stripe / KBZ pay / Paypal
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Ubuntu Server
              </p>
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
