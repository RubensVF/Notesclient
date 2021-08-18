import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { Avatar, makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import MyDrawer from '../MyDrawer';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isSmall =useMediaQuery(theme.breakpoints.down('md'));
  const classes = useStyles();
    return (
      <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        {isSmall?  <>  <MyDrawer></MyDrawer>
          <Typography variant="h6" className={classes.title}>
            Noter
          </Typography></>
        :<> </>}
       
          <Avatar alt='xd' src='https://scontent.fmex1-2.fna.fbcdn.net/v/t1.6435-9/200346827_3832828050161520_6110620154612844022_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=o-uEO90MlcAAX_y8AxX&_nc_ht=scontent.fmex1-2.fna&oh=89efc545c4b6e6db7ed33fc78611a3a9&oe=61268F70'></Avatar>
        </Toolbar>
      </AppBar>
    </div>
    );
};

export default Navbar;