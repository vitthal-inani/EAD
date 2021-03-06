import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';


function InviteTeamMembers(props){
	const { theme } = props;
	return (
		<div>
			<form method="POST">
				<Card style={{ width:'80%', backgroundColor: `${theme ? 'white' : '#add8e6' }`}}>
					<CardContent>
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
				        <Button variant="contained" color={theme ? "primary" : ""} style={{ outline: 'none' }}>
				        <EmailIcon />
				        	Send Invitation
				        </Button>
			        </CardContent>
			    </Card>
			</form>
		</div>
	);
}

export default InviteTeamMembers;