import { Select } from "@material-ui/core";
import {
  TextField,
  Button,
  makeStyles,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
} from "@material-ui/core";
import React, { useState } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { InputLabel } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  container: {
    margin: "15px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    padding: "5px",
  },
  fields: {
    margin: "5px 0",
  },
  absolute: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));
const AddRoutine = (props) => {
  const classes = useStyles();
  const tasks = props.tasks;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState(-1);
  
  const sentData = async () => {
    console.log(priority);
    let auxPriority=0.5;
    if(priority === 0.1 ){
      auxPriority = tasks[0].priority/2;
    }
    else if(priority === 0.5){
      auxPriority = 0.5;
    }
    else if(priority+1 === tasks.length){
      auxPriority = (1 + tasks[priority].priority)/2;
    }
    else{
       auxPriority = (tasks[priority].priority+tasks[priority+1].priority)/2;
    }

    const requetOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json","Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMWQzY2QxOTIwYjBjNTllNzllYTdlZiIsImlhdCI6MTYyOTMxMDEwMSwiZXhwIjoxNjI5MzEzNzAxfQ.-ge9dCSgwu3P-l4-YZTbnWqDyV4WHeQ8_iLThW51Jjs" },
      body: JSON.stringify({
        name: name,
        description: description,
        priority: auxPriority,
        done:false
      }),
    };
    const response  = await fetch("http://localhost:3001/tasks",requetOptions);
  };

  const handleChange = (event) => {
    setPriority(event.target.value);
  };
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOnClick = () => {
    sentData();
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title="Add" aria-label="add">
        <Fab
          color="secondary"
          className={classes.absolute}
          onClick={handleClickOpen}
        >
          <AddIcon />
        </Fab>
      </Tooltip>

      <Dialog open={open} onClose={handleClose} aria-labelledby="">
        <DialogTitle id=""></DialogTitle>
        <DialogContent className={classes.paper}>
          <DialogContentText>xsd</DialogContentText>
          <TextField
             required
            id="outlined-basic1"
            label="Name"
            variant="outlined"
            className={classes.fields}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <TextField
            id="outlined-basic2"
            label="Description"
            variant="outlined"
            className={classes.fields}
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <FormControl>
            <InputLabel>Priority</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={priority}
              onChange={handleChange}
            >
            {tasks.length === 0 ? null: <MenuItem value={0.1}>First</MenuItem> }
              { tasks.length  === 0 ? (
                <MenuItem value={0.5}>First</MenuItem>
              ) : (
                tasks.map((e,index)=>{
                  return <MenuItem value={index} key={index}>After {e.name}</MenuItem>
                })
              )}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
        {priority!==-1 && name!=='' && description!==''?
         (<Button onClick={handleOnClick} color="default">
            Send
          </Button>):null}
          
          <Button onClick={handleClose} color="default">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddRoutine;
