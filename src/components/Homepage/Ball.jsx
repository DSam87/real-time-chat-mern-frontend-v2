import React, { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';



function Ball() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [isSmall, setIsSmall] = useState();

  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <div className="h-full w-full mb-0">
      {screenSize.width < 1180 ? (
        ""
      ) : (
        <Spline scene="https://prod.spline.design/QnYwQ-mJEy-ADJD8/scene.splinecode" /> 
      )}
    </div>
  );
}

export default Ball;
