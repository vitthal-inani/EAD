import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tasks from './Tasks';
import InviteTeamMembers from './InviteTeamMembers';
import Groups from './Groups'; 
import Progress from './InProgressTasks'; 

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
}));

function Dashboard(props){
    const { theme } = props;
    const classes = useStyles();
	return (
		<div>
		    <h1 style={{color : `${theme ? 'black' : 'white'}`}}>Welcome to TaskMate!</h1>
		    <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                    <div className="sections">
                        <Tasks/>
                    </div>
                    </Grid>
        
                    <Grid item xs={12} md={5}>
                        <div className="sections">
                        <Progress/>
						</div>
                    </Grid>
                </Grid>
                <div> </div>
                <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                        <div className="sections">
                       <Groups/>
						</div>
                    </Grid>
                </Grid>
            </div>
      </div>
	);
}

export default Dashboard;