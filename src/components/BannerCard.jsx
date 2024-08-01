import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BannerCard({ collection }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": "480e1cb940e54db3bc01a5c95d2c03cc",
    },
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        `https://api.opensea.io/api/v2/collections/${collection}`,
        options
      );
      setData(await res.json())
    }

    getData();
  }, []);
  return (
    <motion.div 
      className="relative cursor-pointer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ scale: 1.1, zIndex: 1 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <Link href={`/collection/${collection}`}><Image className="rounded-xl" src={data.image_url} width={200} height={200} alt={data.name} /></Link>
    </motion.div>
  );
}
