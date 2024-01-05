import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getImages(category);
  }, [category]);

  const getImages = async (category) => {
    const newImages = await getGifs(category);

    setImages(newImages);
    setIsLoading(false);
  };

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
