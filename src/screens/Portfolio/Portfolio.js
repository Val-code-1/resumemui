import { useRef, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import Diviner from "./Projects/Diviner";
import gsap from "gsap";

export default function Portfolio() {
  const boxRef = useRef();

  useEffect(() => {
    gsap.from(boxRef.current, { duration: 0.5, ease: "power4.out", scale: 0.5 });
  });
  return (
    <Box ref={boxRef}>
      <Grid container spacing={8} columns={2} rows={2} justifyContent="center">
        <Grid item m={12}>
          <Diviner />
        </Grid>
        <Grid item m={12}>
          <Diviner />
        </Grid>
      </Grid>
    </Box>
  );
}
