import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Diviner from "./Projects/Diviner";

export default function Portfolio() {
  return (
    <Box>
      <Grid container spacing={12} columns={2} rows={2} justifyContent="space-evenly">
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
