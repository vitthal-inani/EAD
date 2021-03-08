import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tasks from './Tasks';
import InviteTeamMembers from './InviteTeamMembers';
import Groups from './Groups'; 
import Progress from './InProgressTasks'; 

function Dashboard(){
	const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
      }));
    const classes = useStyles();
	return (

		<div>
		<h1>Welcome to TaskMate!</h1>
		<div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                    <div className="sections">
                        <Tasks/>
                    </div>
                    </Grid>
        
                    <Grid item xs={12} md={6}>
                        <div className="sections">
                        <Progress/>
						</div>
                    </Grid>
                </Grid>
                <div> </div>
                <Grid container spacing={3}>
                    
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