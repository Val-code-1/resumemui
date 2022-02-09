import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Job from "./components/Job";
import "./History.css";
import { Tech } from "./Data/Tech";
import { Companies } from "./Data/Companies";

const History = () => {
  return (
    <Box>
      <br />
      <Container>
        <Typography variant="h3" color={"primary"}>
          Experienced Using:
        </Typography>
      </Container>
      <br />
      <Stack direction="row" spacing={0} justifyContent="space-around">
        {Tech.map((name) => {
          return <Chip label={name} key={name} color={"primary"} variant="outlined" />;
        })}
      </Stack>
      <Container id="list">
        {Companies.map((i) => {
          return (
            <Job
              key={`Job${i}`}
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
