import { Box, Chip, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Job from "./components/Job";
import "./History.css";
import { Tech } from "./Data/Tech";
import { Companies } from "./Data/Companies";

const History = () => {
  return (
    <Box>
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
      {/* .map over this and add props to object file */}
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
      {/* <Job
        title="Direct Support Professional"
        company="Lifescape SD"
        date="May 2010 - Current"
        description="Provided care for adults with disabilities by assisting with their basic needs, such as showering, bathing, dressing eating, laundry, making of their bed, cleaning of their personal space, going grocery shopping, ect.
        Followed and implemented care plan, assisting in the acquisition of resources required to achieve the individual’s goals. Implemented individualized care plans and offered support to patients to maintain their dignity, privacy, and comfort.
        Assisted with individual medical needs, communicated with appropriate medical staff and administered medications. 
        Communicated changes in supports/services and training objectives in the service plan, as well as any significant changes/concerns in the individual’s life.
        Reported and documented allegations/observations of abuse, neglect and exploitation according to established policies and procedures."
      />
      <Job
        title="Table Games Dealer"
        company="Grand Falls Casino"
        date="December 2019 - March 2020"
        description="Performed the assigned game as per company policy and procedures. Responsible for providing exceptional guest service and enjoyment for all patrons. Accurate application of math and using critical thinking skills to keep games running smoothly. 
        Made payoffs and handled other customer table actions."
      />
      <Job
        title="Store Manager"
        company="Dragon's Den"
        date="2013-2014"
        description="Responsible for store including product management, cleaning, opening, and closing. Took pride in helping customers find what they were looking for even if we didn't have it immediately on hand. Trusted with store keys and hundreds of thousands of dollars in product."
      /> */}
    </Box>
  );
};

export default History;
