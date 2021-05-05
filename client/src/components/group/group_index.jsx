import React from 'react';
import GroupIndexItem from './group_index_item';
import { selectUserGroups } from '../../reducers/selectors';

class GroupIndex extends React.Component {


  componentDidMount() {
    this.props.fetchAllGroups();
    this.props.fetchAllUsers();
  }

  render() {
    const { user, groups, openGroupModal, openGroupForm, closeChatModal } = this.props;
    const userGroups = selectUserGroups(user.id, groups);
    if (!userGroups) return null;
    let _userGroups = [];
    let noOfGroups = userGroups.length;
    if (noOfGroups > 10){
      _userGroups = userGroups.slice(0, 10);
    }
    return (
      <div className="group-index-container" id="groups">
        <ul className="group-index">
          <div className="group-index-header">
            <h4 style={{fontWeight: 'bold'}}>Your Groups</h4>
            <button className="open-group-create-button" onClick={openGroupForm}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
          {_userGroups.map(group => (
            <GroupIndexItem
              key={group._id}
              group={group}
              closeChatModal={closeChatModal}
              openGroupModal={openGroupModal}
            />
          ))}
          {noOfGroups > 10 ? <a href="/groups" style={{padding: '10px'}} >More..</a> : null}
        </ul>

      </div >
    );
  }
}

export default GroupIndex;