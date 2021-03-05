import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function InviteTeamMembers(){
	return (
		<div className="invite-team-members">
			<form method="POST">
				<TextField
		          id="filled-full-width"
		          label="Email address"
		          style={{ margin: 8 }}
		          placeholder="Example: someperson@taskmate.com"
		          helperText="Email address of your team member!"
		          fullWidth
		          margin="normal"
		          InputLabelProps={{
		            shrink: true,
		          }}
		        />
		        <Button variant="contained" color="primary" style={{ outline: 'none' }}>
		        	Send Invitation
		        </Button>
			</form>
		</div>
	);
}

export default InviteTeamMembers;