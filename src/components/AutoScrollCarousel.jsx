import { animate, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export default function AutoScrollCarousel({ collection, direction }) {
  const [data, setData] = useState([]);
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPos

    if (direction === "left") {
        finalPos = -width / 2 - 5;
    }
    else {
        finalPos = width / 2 - 5;
    }

    controls = animate(xTranslation, [0, finalPos], {
      ease: "linear",
      duration: 15,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": "480e1cb940e54db3bc01a5c95d2c03cc",
    },
  };

  useEffect(() => {
    async function api() {
      const res = await fetch(
        `https://api.opensea.io/api/v2/collection/${collection}/nfts?limit=15`,
        options
      );
      const response = await res.json();
      setData(response.nfts);
    }

    api();
  });

  return (
    <motion.div
      className="flex justify-center items-center gap-x-[10px] mb-[20px]"
      ref={ref}
      style={{ x: xTranslation }}
    >
      {data.map((data, index) => (
        <Image
          key={index}
          src={data.image_url}
          height={200}
          width={200}
          alt={data.name}
        />
      ))}
    </motion.div>
  );
}
