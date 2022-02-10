import {
  Box,
  Button,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";

export default function Contact() {
  return (
    <Box>
      <Typography variant="h2" color="primary">
        Send me an E-mail
      </Typography>
      <br />
      <Grid container spacing={2} columns={1} direction="column">
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            autoComplete="off"
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            autoComplete="off"
            type={"email"}
          />
        </Grid>
        <Grid item>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={5}
            placeholder="Send me a message"
            style={{ width: 400 }}
          />
        </Grid>
        <Grid item>
          <Button variant="contained">Send</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
