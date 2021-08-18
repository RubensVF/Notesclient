import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 320,
  },
  media: {
    height: 140,
  },
});

const DailyCard = (props) => {
    const classes = useStyles();
    const title = props.title;
    const description = props.description;
    const id = props.id;
    const deleteTask = async ()=>{
    const response  = await fetch(`http://localhost:3001/tasks/${id}`,{method:"DELETE"});
    }
    const doneTask = async () => {
      const response = await fetch(`http://localhost:3001/tasks/${id}`,{method:"POST"}) 
    }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={deleteTask}>
          Delete task 
        </Button>
        <Button size="small" color="primary" onClick={doneTask}>
          Done
        </Button>
      </CardActions>
    </Card>
  );
};

export default DailyCard;
