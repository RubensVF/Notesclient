import React, { useEffect, useState } from "react";
import DailyCard from "../componets/DailyCard";
import { makeStyles } from "@material-ui/core/styles";
import AddRoutine from "./AddRoutine";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "15px",
  },
}));

const DailyRoutine = () => {
  const classes = useStyles();
  const [tasks, setTasks] = useState(null);
  const getDailyTask = async () => {
    const result = await fetch("http://localhost:3001/tasks");
    const resultJson = await result.json();
    const resultJsonSort = await resultJson.sort(compare);
    setTasks(resultJsonSort);
  };

  function compare(a, b) {
    if (a.priority < b.priority) {
      return -1;
    }
    if (a.priority > b.priority) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    getDailyTask();
  }, [tasks]);
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Grid container spacing={4}>
        {tasks === null ? (
          <h1>Loading</h1>
        ) : (
          tasks.map((e, index) => {
            return (
              <Grid item key={index} xs={12} sm={6} md={4}  style={{display: e.done ? 'none':'block' }}>
                <DailyCard
                  key={index}
                  title={e.name}
                  description={e.description}
                  id={e._id}
                ></DailyCard>
              </Grid>
            );
          })
        )}
      </Grid>
      {tasks === null ? <></> : <AddRoutine tasks={tasks}></AddRoutine>}
    </Container>
  );
};

export default DailyRoutine;
