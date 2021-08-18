import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { IconButton, List, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@material-ui/core";
import NoteIcon from "@material-ui/icons/Note";
import { ListItem } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  title: {
    textAlign: "center",
    color: "#5e72e4",
    fontWeight: 900,
  },

}));
const MyDrawer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('md'));
  const [openDrawer, setOpenDrawer] = useState(false);
  const drawercontent = (
    <>
      <div className={classes.toolbar}>
        <h1 className={classes.title}>Noter</h1>
      </div>
      <List>
        <ListItem>
          <ListItemIcon>
            <AccessTimeIcon style={{ color: "red" }} />
          </ListItemIcon>
          <ListItemText>Daily Routine</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <NoteIcon style={{ color: "purple" }} />
          </ListItemIcon>
          <ListItemText>Notes</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <MenuBookIcon style={{ color: "green" }} />
          </ListItemIcon>
          <ListItemText>To Learn</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DirectionsWalkIcon />
          </ListItemIcon>
          <ListItemText>Self improvement</ListItemText>
        </ListItem>
      </List>
    </>
  );
  return (
    <div>{isSmall?<><Drawer
      anchor='left'
      classes={{ paper:classes.drawerPaper }}
      onClose={() => setOpenDrawer(false)}
      open={openDrawer}
     >
      {drawercontent}
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
        <MenuIcon style={{color:'white'}}/>
      </IconButton></>
      :<Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      {drawercontent}
    </Drawer>
    }
      
    </div>
  );
};

export default MyDrawer;
