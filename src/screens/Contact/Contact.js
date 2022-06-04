import { Box, Grid, Typography } from "@mui/material";
import gsap from "gsap";

export default function Contact() {
  // make something that looks better but this is a timeline.
  const tl = gsap.timeline({ repeat: 7, repeatDelay: 1 });
  tl.from("#title", { duration: 0.2, color: "orange" });
  tl.to("#title", { duration: 0.2, color: "yellow" });
  tl.to("#title", { duration: 0.2, color: "red" });
  tl.to("#title", { duration: 0.2, color: "blue" });
  tl.to("#title", { duration: 0.2, color: "rgb(72 40 128)" });

  return (
    <Box>
      <Typography variant="h2" color="primary" id="title">
        Get in touch
      </Typography>
      <br />
      <Grid container spacing={5} columns={1} direction="column">
        <Grid item>
          <a href="https://github.com/Val-code-1" target="blank">
            Github
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/in/benjamin-reit-06050516a/" target="blank">
            Linkedin
          </a>
        </Grid>
        <Grid item>
          <a href="mailto:reit.ben@gmail.com" rel="noreferrer" target="_blank">
            E-mail me, it is my last name then . then my first name but just the short
            version, then gmail.com. Don't forget the @
          </a>
        </Grid>
      </Grid>
    </Box>
  );
}
