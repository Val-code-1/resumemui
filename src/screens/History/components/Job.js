import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
// import gsap from "gsap";
import "./Job.css";
const Job = ({ title, company, date, description }) => {
  // const jobRef = useRef();

  // useEffect(() => {
  //   gsap.from(jobRef.current, {
  //     duration: 2.5,
  //     ease: "power4.out",
  //     y: -200,
  //     opacity: 0,
  //     delay: 0.3,
  //     stagger: {
  //       amount: 1.5,
  //       grid: "auto",
  //     },
  //   });
  //   // switch this to a gentile fade from top
  // });
  return (
    <Box className="job">
      <Container>
        <Typography variant="h3" color={"primary"} className="title">
          {title}
        </Typography>
        <Stack direction={"row"} justifyContent="space-between" alignItems={"center"}>
          <Typography variant="h4" className="company" color={"secondary"}>
            {company}
          </Typography>
          <Typography variant="h5" className="date" color={"secondary"}>
            {date}
          </Typography>
        </Stack>
        <br />
        <Container>
          <Typography className="description">{description}</Typography>
        </Container>
        <br />
        <br />
      </Container>
    </Box>
  );
};

export default Job;
