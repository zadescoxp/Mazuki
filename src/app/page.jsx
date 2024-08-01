"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BannerCard from "@/components/BannerCard";
import Link from "next/link";
import AutoScrollCarousel from "@/components/AutoScrollCarousel";

export default function Home() {
  return (
    <>
      <div
        className="h-screen w-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/bg-video-gif.gif')" }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, ease: "easeIn" }}
          className="flex justify-center items-center gap-x-[10px] text-xl text-[#dad7cd] font-medium absolute bottom-3 left-[50%] ml-[-100px]"
        >
          Scroll for more{" "}
          <Link href={"/"}><Image src="/assets/down.svg" height={17} width={17} alt="Down" /></Link>
        </motion.p>
      </div>
      <div className="bg-[#dad7cd] p-[20px] text-center">
        <motion.h1
          initial={{ opacity: 0, left: -100 }}
          whileInView={{ opacity: 1, left: 0 }}
          className="relative text-[80px] mb-[20px] font-extrabold text-[#344e41]"
        >
          Our Staring Collections
        </motion.h1>
        <div className="w-screen grid grid-cols-7 mb-[20px]">
          <BannerCard collection="azuki" />
          <BannerCard collection="valhalla" />
          <BannerCard collection="muribyfabrik" />
          <BannerCard collection="pxnghostdivision" />
          <BannerCard collection="0n1-force" />
          <BannerCard collection="azukielementals" />
          <BannerCard collection="beanzofficial" />
        </div>
      </div>

      <div className="w-screen flex">
        <motion.div
          initial={{ opacity: 0, left: -50 }}
          whileInView={{ opacity: 1, left: 0 }}
          transition={{ ease: "easeIn", duration: 0.25 }}
          className="relative w-[50%] p-[20px] pl-[40px] bg-[#344e41]"
        >
          <h1 className="text-[65px] text-[#dad7cd] font-bold">What we do ?</h1>
          <p className="text-[19px] text-[#dad7cd] mb-[20px]">
            We help you get the best NFTs data from Azuki, Valhalla, Muri by
            Fabrik, 0n1-force, Azuki Elementals, Beanz Official.
          </p>
          <Link
            className="bg-[#dad7cd] inline-flex items-center gap-x-[10px] p-[13px] pl-[20px] pr-[20px] font-medium rounded-full transition-all hover:bg-[#92908a]"
            href={"/about"}
          >
            Learn More{" "}
            <Image
              src="/assets/right-arrow.png"
              height={70}
              width={35}
              alt="What we do ?"
            />
          </Link>
          <Image
            src="/assets/left-showcase.png"
            height={512}
            width={512}
            alt="What we do ?"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, right: -50 }}
          whileInView={{ opacity: 1, right: 0 }}
          transition={{ ease: "easeIn", duration: 0.25 }}
          className="relative bg-[#dad7cd] w-[50%] p-[20px] pr-[40px]"
        >
          <h1 className="text-[65px] text-[#344e41] font-bold">
            Why you need us ?
          </h1>
          <p className="text-[19px] text-[#344e41] mb-[20px]">
            You need the BEST that&apos;s why you need us
          </p>
          <Link
            className="bg-[#344e41] text-[#dad7cd] p-[13px] pl-[20px] pr-[20px] font-medium rounded-full transition-all hover:bg-[#202f28]"
            href={"/about"}
          >
            Join Us
          </Link>
          <Image
            className="mt-[20px]"
            src="/assets/right-showcase.png"
            height={512}
            width={512}
            alt="What we do ?"
          />
        </motion.div>
      </div>

      <div className="w-screen bg-[#0d0d0d] pt-[40px] pb-[40px] overflow-x-hidden">
        <AutoScrollCarousel collection={"azuki"} direction="left" />
        <AutoScrollCarousel collection={"valhalla"} direction="right" />
      </div>
    </>
  );
}
