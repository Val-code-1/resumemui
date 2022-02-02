import { Box } from "@mui/system";
import "./Home.css";
import img from "../../assets/Bojack.png";

const Home = () => {
  return (
    <Box id="background">
      <img src={img} id="img" alt="Bojack Horseman" />
    </Box>
  );
};

export default Home;
