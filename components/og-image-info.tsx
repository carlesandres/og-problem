"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const OGImageInfo = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    // get og image info from the dom
    const getOGImage = async () => {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        setUrl(ogImage.getAttribute("content") || "");
      }
    };
    getOGImage();
  }, []);

  if (!url) {
    return null;
  }

  return (
    <div>
      <h2>OG Image Info</h2>
      <p>{`URL: ${url}`}</p>
      <Link href={url}>View Image</Link>
    </div>
  );
};

export default OGImageInfo;
