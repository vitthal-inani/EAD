import React from 'react';
import Moment from 'moment';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';

class TaskShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: this.props.task._id,
      name: this.props.task.name,
      description: this.props.task.description,
      estTime: this.props.task.estTime,
      deadline: this.props.task.deadline,
      userId: this.props.task.userId,
      groupId: this.props.task.groupId,
      completed: this.props.task.completed,
    };
  }

  render() {
    return (
      <div className="task-modal-container">
        <List id="task-index-list" className="task-index-container collection with-header">
          <ListItem className="collection-header" id="task-header">
            <h6>{this.state.name}</h6>
          </ListItem>
          {this.state.description.map((description, idx) => (
              <ListItem className={`collection-item hvr-fade`} >
                <ListItemAvatar>
                  <Avatar className={`folder-icon ${this.state.completed[idx] ? "complete" : "incomplete"}`}>
                    {this.state.completed[idx] ? <i className="fas fa-check"></i> : <FolderIcon />}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={description}
                  secondary={`Finish by: ${Moment(this.state.deadline[idx]).utc().format("MMMM Do, YYYY")}`}
                />
              </ListItem>
          ))}
        </List>
      </div>
    );
  }
}

export default TaskShow;