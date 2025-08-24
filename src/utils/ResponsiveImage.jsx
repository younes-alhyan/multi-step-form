import { useState, useEffect } from "react";

import mobileImg from "../assets/bg-sidebar-mobile.svg";
import desktopImg from "../assets/bg-sidebar-desktop.svg";

function ResponsiveImage() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const src = width <= 800 ? mobileImg : desktopImg;

  return <img src={src} alt="Responsive" className="Bar-image"/>;
}

export default ResponsiveImage;
