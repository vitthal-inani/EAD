import React from 'react';
import './Tasks.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListIcon from '@material-ui/icons/List';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AddIcon from '@material-ui/icons/Add';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';


class Tasks extends React.Component {
  render() {
    return (
      <React.Fragment>
      <div className="list-grid-view">
        <IconButton><ListIcon /></IconButton>
        <IconButton><ViewComfyIcon /></IconButton>
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
                <th className="serial-no"><IconButton><ArrowDropDownIcon /></IconButton></th>
                <th className="sub-heading">To Do</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="serial-no">01</td>
                <td className="col2"><IconButton><CheckCircleIcon style={{ color: '04c721' }} /></IconButton> Create Wireframes</td>
                <td className="col3">02:00</td>
                <td className="col4">Amelia</td>
                <td className="col5">Yesterday</td>
            </tr>
            <tr>
                <td className="serial-no">02</td>
                <td className="col2"><IconButton><CheckCircleIcon style={{ color: '04c721' }} /></IconButton> Setup Database</td>
                <td className="col3">02:00</td>
                <td className="col4">Julia</td>
                <td className="col5">Today</td>
            </tr>
            <tr>
                <td className="serial-no">03</td>
                <td className="col2"><IconButton ><CheckCircleOutlineIcon /></IconButton> Dashboard Design</td>
                <td className="col3">07:00</td>
                <td className="col4">Martin</td>
                <td className="col5">10 March, 2021</td>
            </tr>
        </tbody>
        <thead className="addnew-header">
            <tr>
                <th></th>
                <th><Button><AddIcon fontSize="small"/> Add new</Button></th>
            </tr>
        </thead>
      </table>


      <table className="styled-table">
        <thead className="subtable-header">
            <tr>
                <th className="serial-no"><IconButton><ArrowDropDownIcon /></IconButton></th>
                <th className="sub-heading">In Progress</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td className="serial-no">01</td>
                <td className="col2"><IconButton><CheckCircleOutlineIcon /></IconButton> Dashboard Design</td>
                <td className="col3"></td>
                <td className="col4">Amelia</td>
                <td className="col5">10 March, 2021</td>
            </tr>
            <tr>
                <td className="serial-no">02</td>
                <td className="col2"><IconButton><CheckCircleIcon style={{ color: '04c721' }} /></IconButton> Extramark Logo Design</td>
                <td className="col3"></td>
                <td className="col4">Amelia</td>
                <td className="col5">10 March, 2021</td>
            </tr>
            <tr>
                <td className="serial-no">03</td>
                <td className="col2"><IconButton ><CheckCircleOutlineIcon /></IconButton> Dashboard Design</td>
                <td className="col3"></td>
                <td className="col4">Martin</td>
                <td className="col5">10 March, 2021</td>
            </tr>
        </tbody>
        <thead className="addnew-header">
            <tr>
                <th></th>
                <th><Button><AddIcon fontSize="small"/> Add new</Button></th>
            </tr>
        </thead>
      </table>
      </React.Fragment>
    );
  }
}

export default Tasks;