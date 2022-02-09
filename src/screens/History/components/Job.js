import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
// import "./Job.css";
const Job = ({ title, company, date, description }) => {
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
