import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function CollectionCard({ collection }) {
  const [data, setData] = useState([]);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_OPENSEA_API,
    },
  };

  useEffect(() => {
    async function api() {
      const res = await fetch(
        `https://api.opensea.io/api/v2/collections/${collection}`,
        options
      );
      setData(await res.json());
    }

    api();
  }, []);

  return (
    <div className="w-[50%] flex gap-x-10">
      <div className="">
        <Image src={data.image_url} height={200} width={200} alt={data.name} />

        {data.project === "" ? (
          <span className="inline-flex items-center">
            <h1 className="text-[25px] font-medium">{data.name}</h1>
          </span>
        ) : (
          <Link
            className="inline-flex items-center hover:underline"
            target="_blank"
            href={`${data.project_url}`}
          >
            <h1 className="text-[25px] font-medium">{data.name}</h1>{" "}
            <Image
              className="-rotate-45"
              src="/assets/link-arrow.svg"
              height={35}
              width={35}
              alt="arrow"
            />
          </Link>
        )}
      </div>

      <div className="w-[60%]">
        <p className="mb-[20px] text-[13px]">{data.description}</p>
        <Link
          className="text-sm font-medium p-[10px] pl-[15px] pr-[15px] bg-[#111111] rounded-full hover:bg-[#222222]"
          target="_blank"
          href={`${data.opensea_url}`}
        >
          Buy Now
        </Link>
      </div>
    </div>
  );
}
