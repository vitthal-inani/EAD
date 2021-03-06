import React, { useState } from 'react';
import './Groups.css';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Modal } from 'react-bootstrap';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '20ch',
  },
}));

function CreateGroupModal(props){
  const classes = useStyles();
  const { theme } = props
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className={classes.root}>
			<form method="POST">
				<TextField
		          id="outlined-full-width"
		          label="Group Name"
		          style={{ margin: 8 }}
		          placeholder="Enter a group name"
		          fullWidth
		          margin="normal"
		          InputLabelProps={{
		            shrink: true,
		          }}
		          variant="outlined"
		        />
		        <TextField
		          id="outlined-full-width"
		          label="Group Description"
		          style={{ margin: 8 }}
		          placeholder="Enter group's description"
		          fullWidth
		          margin="normal"
		          InputLabelProps={{
		            shrink: true,
		          }}
		          variant="outlined"
		        />
		        <TextField
		          id="outlined-full-width"
		          label="GitHub Repo"
		          style={{ margin: 8 }}
		          placeholder="Provide your GitHub repo link"
		          fullWidth
		          margin="normal"
		          InputLabelProps={{
		            shrink: true,
		          }}
		          variant="outlined"
		        />
		        <Button variant="contained" color={theme ? "primary" : ""} type="submit" onClick={(e)=>{e.preventDefault()}}>Submit</Button>
			</form>
		</div>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ outline: 'none' }} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Groups(props){
	const [modalShow, setModalShow] = useState(false);
	const { theme } = props;
	return(
		<React.Fragment>
			<table className="styled-table">
		      	<thead className="main-header">
		          	<tr>
		              <th className="serial-no">#</th>
		              <th className="col2">Group name</th>
		              <th className="col3">Group Leader</th>
		              <th className="col4">No. of group members</th>
		          	</tr>
		      	</thead>
		      	<tbody>
		          <tr>
		              <td className="serial-no">01</td>
		              <td className="col2">ASE-Project</td>
		              <td className="col3">Martin</td>
		              <td className="col4">5</td>
		          </tr>
		          <tr>
		              <td className="serial-no">02</td>
		              <td className="col2">SOAD-Project</td>
		              <td className="col3">Kevin</td>
		              <td className="col4">5</td>
		          </tr>
		          <tr>
		              <td className="serial-no">03</td>
		              <td className="col2">EAD-Project</td>
		              <td className="col3">Marcus</td>
		              <td className="col4">5</td>
		          </tr>
		      	</tbody>
		      </table>
			<Button style={{ outline: 'none', 'text-transform': 'capitalize' }} color="primary" variant="contained" onClick={() => setModalShow(true)}>
				Create Group
			</Button>
			<CreateGroupModal
		        show={modalShow}
		      	onHide={() => setModalShow(false)}
		      	theme= {theme}
		    />
	    </React.Fragment>
	);
}

export default Groups;