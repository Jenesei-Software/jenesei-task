import { useEffect, useState } from "react";

const useScreenOrientation = () => {
  const [orientation, setOrientation] = useState(getOrientation());

  function getOrientation() {
    return typeof window.orientation !== "undefined"
      ? window.orientation === 0
        ? "portrait"
        : "landscape"
      : window.innerWidth > window.innerHeight
      ? "landscape"
      : "portrait";
  }

  useEffect(() => {
    const handleResize = () => {
      setOrientation(getOrientation());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return orientation;
};

export default useScreenOrientation;
