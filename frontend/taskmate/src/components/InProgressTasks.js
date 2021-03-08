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
import DeleteIcon from '@material-ui/icons/Delete';


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
          New Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form method="POST" className={classes.container} noValidate onSubmit={props.submitHandler}>
          <TextField
            id="taskName"
            label="Task Name"
            autoComplete="current-password"
          />
          <TextField
            id="taskAssignName"
            label="Task Assign Name"
            autoComplete="current-password"
            style={{'margin-left': '5px'}}
          />
          <TextField
            id="date"
            label="Due Date"
            type="date"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" style={{ outline: 'none', 'margin-top': '15px', 'margin-left': '40%' }} variant="contained" color="primary" onClick={props.onHide}>Add new</Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ outline: 'none' }} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


class InProgressTasks extends React.Component{

  state = {
    modalShow: false,
    inProgressTasks: [
      {
        id: 1,
        taskName: "Create Wireframes",
        hours: "02:00",
        taskAssignName: "Amelia",
        dueDate: "Yesterday",
        isComplete: false
      },
      {
        id: 2,
        taskName: "Setup Database",
        hours: "02:00",
        taskAssignName: "Julia",
        dueDate: "Today",
        isComplete: false
      },
      {
        id: 3,
        taskName: "Dashboard Design",
        hours: "07:00",
        taskAssignName: "Martin",
        dueDate: "  2021-03-10",
        isComplete: false
      }
    ],
  };

  showModal(){
    this.setState({
      modalShow: true,
    });
  };

  hideModal(){
    this.setState({
      modalShow: false,
    });
  };

  render(){

    const submitHandler = (event) =>{
      event.preventDefault();
      const taskName = event.target.taskName.value;
      const dueDate = event.target.date.value;
      const taskAssignName = event.target.taskAssignName.value;
      const id = this.state.inProgressTasks.length;
      const inProgressTask = {
        id: id+1,
        taskName: taskName,
        taskAssignName: taskAssignName,
        dueDate: dueDate
      };
      let inProgressTasks = [...this.state.inProgressTasks, inProgressTask];
      this.setState({
        inProgressTasks: inProgressTasks,
      });
    };

    const clickHandler = (id) =>{
      let inProgressTask = this.state.inProgressTasks.find(inProgressTask => inProgressTask.id === id);
      inProgressTask.isComplete = true;
      let inProgressTasks = [...this.state.inProgressTasks]
      this.setState({
        inProgressTasks: inProgressTasks,
      });
    };

    const deleteInProgressTask = (id) => {
      const inProgressTasks = this.state.inProgressTasks.filter(inProgressTask => {
        return inProgressTask.id !== id
      });
      this.setState({
        inProgressTasks: inProgressTasks,
      });
    };

    return (
      <React.Fragment>
      {/* <div className="list-grid-view">
        <IconButton style={{ outline: 'none' }}><ListIcon /></IconButton>
        <IconButton style={{ outline: 'none' }}><ViewComfyIcon /></IconButton>
      </div> */}
      <table className="styled-table">
        <thead className="main-header">
            <tr>
                <th className="serial-no">#</th>
                <th className="col-2">Task Name</th>
                <th className="col-3">Task Assign Name</th>
                <th className="col-4">Due Date</th>
                <th className="delete"></th>
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
          {this.state.inProgressTasks.map((inProgressTask)=>(
            <tr>
                <td className="serial-no">{inProgressTask.id}</td>
                <td className="col-2">
                	<IconButton
                    id={inProgressTask.id}
                    onClick={() => clickHandler(inProgressTask.id)}
                    style={{ outline: 'none' }}
                  >
                  {inProgressTask.isComplete ?
                   <CheckCircleIcon 
                    style={{ color: '04c721' }} /> : 
                   <CheckCircleOutlineIcon />}
                  </IconButton> {inProgressTask.taskName}
                  </td>
                <td className="col-3">{inProgressTask.taskAssignName}</td>
                <td className="col-4">{inProgressTask.dueDate}</td>
                <td className="delete"><IconButton style={{ outline: 'none' }} id={inProgressTask.id} onClick={() => deleteInProgressTask(inProgressTask.id)}>
                	<DeleteIcon />
                </IconButton></td>
            </tr>
          ))}
        </tbody>
        <thead className="addnew-header">
            <tr>
                <th></th>
                <th><Button style={{ outline: 'none' }} onClick={() => this.showModal()}>
                <AddIcon fontSize="small"/> Add new</Button>
                <AddNewTodoModal
                  show={this.state.modalShow}
                  onHide={() => this.hideModal()}
                  submitHandler={submitHandler}
                />
                </th>
            </tr>
        </thead>
      </table>
      </React.Fragment>
    );
  }
}

export default InProgressTasks;