"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BannerCard from "@/components/BannerCard";
import Link from "next/link";
import { Suspense } from "react";
import Loading from "@/components/loading";
import Footer from "@/components/Footer";

export default function Home() {

  return (
    <Suspense fallback={<Loading />}>
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
          <Link href={"/"}>
            <Image src="/assets/down.svg" height={17} width={17} alt="Down" />
          </Link>
        </motion.p>
      </div>

      <div className="w-screen flex">
        <motion.div
          initial={{ opacity: 0, left: -50 }}
          whileInView={{ opacity: 1, left: 0 }}
          transition={{ ease: "easeIn", duration: 0.25 }}
          className="relative w-[50%] p-[20px] pl-[40px] bg-[#111111]"
        >
          <h1 className="text-[65px] text-[#dad7cd] font-bold">WHAT WE DO ?</h1>
          <p className="text-[17px] text-[#dad7cd] mb-[20px] font-medium">
            We help you get the best NFTs data from Azuki, Valhalla, Muri by
            Fabrik, 0n1-force, Azuki Elementals, Beanz Official.
          </p>
          <Link
            className="bg-[#dad7cd] inline-flex items-center gap-x-[10px] p-[13px] pl-[20px] pr-[20px] font-medium rounded-full transition-all hover:bg-[#92908a]"
            href={"/about"}
          >
            Learn More{" "}
            <Image
              src="/assets/link-arrow-dark.svg"
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
          <h1 className="text-[65px] text-[#111111] font-bold">
            WHY YOU NEED US ?
          </h1>
          <p className="text-[17px] font-medium text-[#111111] mb-[30px]">
            You need the BEST that&apos;s why you need us. Come and join us so
            we can help you out in making the right choice for your next NFT
          </p>
          <Link
            className="bg-[#111111] text-[#dad7cd] p-[13px] pl-[20px] pr-[20px] font-medium rounded-full transition-all hover:bg-[#202f28]"
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

      <div className="group w-screen h-[720px] bg-[url('/assets/promo.png')] bg-cover bg-center]">
        <motion.div className="w-full h-full bg-[rgba(0,0,0,0.85)] hidden justify-center items-center group-hover:flex">
           
          <Link
            className="bg-[#dad7cd] inline-flex justify-center items-center gap-x-2 p-[20px] rounded-full pl-[40px] pr-[40px] text-lg font-medium hover:bg-[#92908a]"
            href={"/gallery"}
          >
            See Gallery{" "}
            <Image
              src="/assets/link-arrow-dark.svg"
              height={65}
              width={32.5}
              alt="What we do ?"
            />
          </Link>
        </motion.div>
      </div>

      <div className="relative h-[320px]" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>
        <Footer />
      </div>
    </Suspense>
  );
}
