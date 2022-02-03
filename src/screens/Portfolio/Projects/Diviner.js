import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

import mtg from "../../../assets/mtg.png";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Diviner() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 445 }}>
      <CardActionArea href="https://mtg-card-diviner.herokuapp.com/" target="blank">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="MagicCardSearch">
              MTG
            </Avatar>
          }
          title="Magic the Gathering Diviner"
          subheader="MTG card database search"
        />
        <CardMedia component="img" height="194" image={mtg} alt="MTG Diviner" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            A Magic the Gathering search engine I build using the official API
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            My first personal project as I was learning how to build sites with React.
          </Typography>
          <Typography paragraph>
            I've been a big fan of Magic the Gathering since 2007 and the game's rules
            have helped me wrap my head around programming. Taking advantage of my
            knowledge of the game I implemented many features into this project that
            helped expand my familiarity with React.
          </Typography>
          <Typography paragraph></Typography>
          <Typography>
            If you're still reading this I'm guessing you play Magic as well. Accept this
            challenge to a game of Duel Commander or Modern! If I win you give me a job.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
