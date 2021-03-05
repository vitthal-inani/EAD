import React, {useState} from 'react';
import './Tasks.css';
import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListIcon from '@material-ui/icons/List';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function AddNewTodoModal(props){
  const classes = useStyles();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add New Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form method="POST" className={classes.container} noValidate>
          <TextField
            id="standard-password-input"
            label="Title"
            autoComplete="current-password"
          />
          <TextField
            id="time"
            label="Hours"
            type="time"
            defaultValue="01:00"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
          />
          <TextField
            id="date"
            label="Due Date"
            type="date"
            defaultValue="2021-03-05"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button style={{ outline: 'none' }} onClick={props.onHide}>Add new</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ outline: 'none' }} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Tasks(){
  const [modalShow, setModalShow] = useState(false);
  return (
    <React.Fragment>
    <div className="list-grid-view">
      <IconButton style={{ outline: 'none' }}><ListIcon /></IconButton>
      <IconButton style={{ outline: 'none' }}><ViewComfyIcon /></IconButton>
    </div>
    <table className="styled-table">
      <thead className="main-header">
          <tr>
              <th className="serial-no">#</th>
              <th className="col2">Task Name</th>
              <th className="col3">Hours</th>
              <th className="col4">Task Assign Name</th>
              <th className="col5">Due Date</th>
          </tr>
      </thead>
      </table>
      <table className="styled-table">
      <thead className="subtable-header-header">
          <tr>
              <th className="serial-no"><IconButton style={{ outline: 'none' }}><ArrowDropDownIcon /></IconButton></th>
              <th className="sub-heading">To Do</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td className="serial-no">01</td>
              <td className="col2"><IconButton style={{ outline: 'none' }}><CheckCircleIcon style={{ color: '04c721' }} /></IconButton> Create Wireframes</td>
              <td className="col3">02:00</td>
              <td className="col4">Amelia</td>
              <td className="col5">Yesterday</td>
          </tr>
          <tr>
              <td className="serial-no">02</td>
              <td className="col2"><IconButton style={{ outline: 'none' }}><CheckCircleIcon style={{ color: '04c721' }} /></IconButton> Setup Database</td>
              <td className="col3">02:00</td>
              <td className="col4">Julia</td>
              <td className="col5">Today</td>
          </tr>
          <tr>
              <td className="serial-no">03</td>
              <td className="col2"><IconButton style={{ outline: 'none' }}><CheckCircleOutlineIcon /></IconButton> Dashboard Design</td>
              <td className="col3">07:00</td>
              <td className="col4">Martin</td>
              <td className="col5">10 March, 2021</td>
          </tr>
      </tbody>
      <thead className="addnew-header">
          <tr>
              <th></th>
              <th><Button style={{ outline: 'none' }} onClick={() => setModalShow(true)}>
              <AddIcon fontSize="small"/>
                Add new
              </Button></th>
              <AddNewTodoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
          </tr>
      </thead>
    </table>

    <table className="styled-table">
      <thead className="subtable-header">
          <tr>
              <th className="serial-no"><IconButton style={{ outline: 'none' }}><ArrowDropDownIcon /></IconButton></th>
              <th className="sub-heading">In Progress</th>
          </tr>
      </thead>
      <tbody>
          <tr>
              <td className="serial-no">01</td>
              <td className="col2"><IconButton style={{ outline: 'none' }}><CheckCircleOutlineIcon /></IconButton> Dashboard Design</td>
              <td className="col3"></td>
              <td className="col4">Amelia</td>
              <td className="col5">10 March, 2021</td>
          </tr>
          <tr>
              <td className="serial-no">02</td>
              <td className="col2"><IconButton style={{ outline: 'none' }}><CheckCircleIcon style={{ color: '04c721' }} /></IconButton> Extramark Logo Design</td>
              <td className="col3"></td>
              <td className="col4">Amelia</td>
              <td className="col5">10 March, 2021</td>
          </tr>
          <tr>
              <td className="serial-no">03</td>
              <td className="col2"><IconButton style={{ outline: 'none' }}><CheckCircleOutlineIcon /></IconButton> Dashboard Design</td>
              <td className="col3"></td>
              <td className="col4">Martin</td>
              <td className="col5">10 March, 2021</td>
          </tr>
      </tbody>
      <thead className="addnew-header">
          <tr>
              <th></th>
              <th><Button style={{ outline: 'none' }}><AddIcon fontSize="small"/> Add new</Button></th>
          </tr>
      </thead>
    </table>
    </React.Fragment>
  );
}

export default Tasks;