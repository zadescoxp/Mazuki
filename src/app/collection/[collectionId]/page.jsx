"use client";

import Loading from "@/components/loading.js";
import { Suspense, useEffect, useState } from "react";

export default function Collection({params}) {
  const [data, setData] = useState([]);
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
        `https://api.opensea.io/api/v2/collection/${params.collectionId}/nfts`,
        options
      );
      const response = await res.json()
      setData(response.nfts)
    }

    api();
  });

  return <Suspense fallback={<Loading />}>
    {data.map((data, index) => <h1 key={index}>{data.identifier}</h1>)}
  </Suspense>;
}
