import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Job from "./components/Job";
import "./History.css";
import { Tech } from "./Data/Tech";
import { Companies } from "./Data/Companies";

const History = () => {
  const jobRef = useRef();

  useEffect(() => {
    gsap.from(".chip", {
      duration: 5,
      ease: "power4.out",
      x: -200,
      opacity: 0,
      delay: 0.3,
      stagger: {
        amount: 2.0,
      },
    });
  });

  useEffect(() => {
    gsap.from(".job", {
      duration: 2.5,
      ease: "power4.out",
      y: -200,
      opacity: 0,
      delay: 4.1,
      stagger: {
        amount: 1.2,
        grid: "auto",
      },
    });
  });
  return (
    <Box>
      <br />
      <Container id="techBox">
        <Container>
          <Typography variant="h3" color={"primary"}>
            Experienced Using:
          </Typography>
        </Container>
        <br />
        <Stack direction="row" spacing={0} justifyContent="space-around">
          {Tech.map((name) => {
            return (
              <Chip
                className="chip"
                label={name}
                key={name}
                color={"primary"}
                variant="outlined"
              />
            );
          })}
        </Stack>
      </Container>
      <Container id="list" ref={jobRef}>
        {Companies.map((i) => {
          return (
            <Job
              key={i.title}
              title={i.title}
              company={i.company}
              date={i.date}
              description={i.description}
            />
          );
        })}
      </Container>
    </Box>
  );
};

export default History;
