import { Box, Grid, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Box>
      <Typography variant="h2" color="primary">
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
        <Grid item>
          <Typography>Something else</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
