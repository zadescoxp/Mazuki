import Image from "next/image";
import Link from "next/link.js";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Cards({ collection }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
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
        `https://api.opensea.io/api/v2/collection/${collection}/nfts?limit=8`,
        options
      );
      const response = await res.json();
      setData(response.nfts);
    }

    api();
    setLoading(false);
  }, []);

  if (loading) {
    <Skeleton />;
  }
  return (
    <div className="mb-[10px] w-full flex flex-wrap justify-center gap-x-[15px] gap-y-[10px]">
      {data.map((data, index) => (
        <Link
          className="relative group"
          key={index}
          href={data.opensea_url}
          target="_blank"
        >
          <Image
            className="rounded-lg"
            src={data.image_url}
            height={200}
            width={200}
            alt={data.name}
          />
          <h1
            className="absolute text-[17px] font-medium h-full w-full bottom-0 left-0 rounded-lg z-[3] hidden justify-center items-center group-hover:flex ease-in duration-200"
            style={{
              backgroundImage: "linear-gradient(to bottom, transparent, #000)",
            }}
          >
            {data.name}
          </h1>
        </Link>
      ))}
    </div>
  );
}
