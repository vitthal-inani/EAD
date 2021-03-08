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
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Todo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form method="POST" className={classes.container} noValidate onSubmit={props.newTodoSubmitHandler}>
          <TextField
            id="taskName"
            label="Task Name"
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
            id="taskAssignName"
            label="Task Assign Name"
            autoComplete="current-password"
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
          <Button 
            type="submit"
            style={{ outline: 'none', 'margin-top': '10px', 'margin-left': '35%' }}
            variant="contained"
            color="primary"
            onClick={props.onHide}
          >
            Add new
          </Button>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button style={{ outline: 'none' }} onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

class Tasks extends React.Component{

  state = {
    modalShow: false,
    todos: [
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

    const newTodoSubmitHandler = (event) => {
      event.preventDefault();
      const taskName = event.target.taskName.value;
      const hours = event.target.time.value;
      const dueDate = event.target.date.value;
      const taskAssignName = event.target.taskAssignName.value;
      const id = this.state.todos.length;
      const newTodo = {
        id: id+1,
        taskName: taskName,
        hours: hours,
        taskAssignName: taskAssignName,
        dueDate: dueDate
      };
      let todos = [...this.state.todos, newTodo];
      this.setState({
        todos: todos,
      });
    };

    const clickHandler = (id) =>{
      let todo = this.state.todos.find(todo => todo.id === id);
      if (todo.isComplete === false){
        todo.isComplete = true;
      }else{
        todo.isComplete = false;
      }
      let todos = [...this.state.todos]
      this.setState({
        todos: todos,
      });
    };

    const deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        todos: todos,
      });
    };

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
                <th className="delete"></th>
            </tr>
        </thead>
        </table>
        <table className="styled-table">
        <thead className="subtable-header-header">
            <tr>
                <th className="serial-no">
                  <IconButton
                    style={{ outline: 'none' }}
                  >
                  <ArrowDropDownIcon />
                  </IconButton></th>
                <th className="sub-heading">To Do</th>
            </tr>
        </thead>
        <tbody>
          {this.state.todos.map((todo)=>(
            <tr>
                <td className="serial-no">{todo.id}</td>
                <td className="col2">
                  <IconButton
                    id={todo.id}
                    onClick={() => clickHandler(todo.id)}
                    style={{ outline: 'none' }}
                  >
                  {todo.isComplete ?
                   <CheckCircleIcon 
                    style={{ color: '04c721' }} /> : 
                   <CheckCircleOutlineIcon />}
                  </IconButton> {todo.taskName}
                </td>
                <td className="col3">{todo.hours}</td>
                <td className="col4">{todo.taskAssignName}</td>
                <td className="col5">{todo.dueDate}</td>
                <td className="delete"><IconButton id={todo.id} onClick={() => deleteTodo(todo.id)} style={{ outline: 'none' }}><DeleteIcon /></IconButton></td>
            </tr>
          ))}
        </tbody>
        <thead className="addnew-header">
            <tr>
                <th></th>
                <th><Button style={{ outline: 'none' }} onClick={() => this.showModal()}>
                <AddIcon fontSize="small"/>
                  Add new
                </Button></th>
                <AddNewTodoModal
                  show={this.state.modalShow}
                  onHide={() => this.hideModal()}
                  newTodoSubmitHandler={newTodoSubmitHandler}
                />
            </tr>
        </thead>
      </table>
      </React.Fragment>
    );
  }
}

export default Tasks;