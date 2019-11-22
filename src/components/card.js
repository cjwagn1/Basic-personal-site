import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import data from "../data/card.json";

const useStyles = makeStyles({
  card: {
    width: 350,
    backgroundColor: "#379683",
    color: "white"
  },
  media: {
    height: 350
  }
});

const CardStuff = props => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.picture}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.descr}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={props.link}>Learn More</a>
        </Button>
      </CardActions>
    </Card>
  );
};

export const CardReal = () => {
  return (
    <div>
      <div>
        <div className="container1">
          {data.map(p => (
            <CardStuff
              name={p.name}
              key={p.id}
              descr={p.descr}
              link={p.link}
              picture={p.picture}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
