import { Box, Container, Paper, Typography } from "@mui/material";

export default function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        "& > :not(style)": {
          m: 1,
          width: 645,
          height: 850,
        },
      }}
    >
      <Paper elevation={3}>
        <br />
        <Container>
          <Typography>
            Hello there, I'm Benjamin Reit from Sioux Falls, South Dakota. I've lived here
            my entire life. I've spent the last decade working for a wonderful company
            Lifescape. I picked up coding February 2021 when my friends who had been doing
            it for some time talked me into starting.
          </Typography>
          <Typography>
            I've always enjoyed computer games and figuring out how things work. It has
            served me very well programming. I've been an avid player of Magic the
            Gathering for the last 15 years and until they changed the Judge program I was
            an official judge for the game. If you are familiar with the game you'll know
            the rule set can be as complex as programming is sometimes.
          </Typography>
        </Container>
      </Paper>
    </Box>
  );
}
