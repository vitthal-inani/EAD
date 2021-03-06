import { connect } from 'react-redux';

import { fetchTasks, deleteTask, updateTask,forwardTask } from '../../actions/task_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import TaskIndex from './task_index';

const mapStateToProps = (state) => {
  let tasks = Object.values(state.entities.tasks)
  let mytasks = Object.values(state.entities.tasks)
    .filter(task => task.userId[task.userId.length-1] === state.session.id && !task.completed[task.completed.length-1]
    );
  if (state.ui.groupModal) {
    tasks = tasks.filter(task => task.groupId === state.ui.groupModal);
  }
  //Sort the tasks by the deadline. Oldest ones first
  mytasks.sort((a, b) => {
    if (a.deadline <= b.deadline)
      return -1;
    else
      return 1;
  });

  return ({
    tasks: tasks,
    mytasks: mytasks,
    users: Object.values(state.entities.users)
      .filter(user => user.username)
      .sort((a, b) => {
        if (a.username < b.username)
          return -1;
        else
          return 1;
      })
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchAllUsers()),
  fetchTasks: () => dispatch(fetchTasks()),
  deleteTask: id => dispatch(deleteTask(id)),
  updateTask: task => dispatch(updateTask(task)),
  forwardTask: task => dispatch(forwardTask(task))
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);