import { useRef, useEffect } from "react";
import { Box } from "@mui/system";
import { gsap } from "gsap";
import "./Home.css";
import img from "../../assets/Bojack.png";

const Home = () => {
  const imgRef = useRef();
  useEffect(() => {
    gsap.from(imgRef.current, { duration: 5.5, ease: "power4.out", y: 500 });
  });
  return (
    <Box id="background">
      <img src={img} id="img" ref={imgRef} alt="Bojack Horseman" />
    </Box>
  );
};

export default Home;
