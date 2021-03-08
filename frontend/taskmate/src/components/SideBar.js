import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './SideBar.css'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  OrderedListOutlined,
  UsergroupAddOutlined,
  MailOutlined,
} from '@ant-design/icons';
import Button from '@material-ui/core/Button';
import Tasks from './Tasks';
import InviteTeamMembers from './InviteTeamMembers';
import Dashboard from './Dashboard';
import Groups from './Groups'; 
import InProgressTasks from './InProgressTasks';


const { Header, Sider, Content } = Layout;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
    light_mode: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  enableLightMode = () => {
    this.setState({
      light_mode: true,
    });
  };

  enableDarkMode = () => {
    this.setState({
      light_mode: false,
    });
  };

  render() {
    const { location } = this.props;

    const theme = this.state.light_mode;

    let component = <Dashboard />;
    if (location.pathname === '/tasks'){
      component = <Tasks theme={theme}/>
    }else if (location.pathname === '/invite'){
      component = <InviteTeamMembers theme={theme} />
    }else if (location.pathname === '/groups'){
      component = <Groups theme={theme} />
    }else if (location.pathname === '/in-progress'){
      component = <InProgressTasks theme={theme} />
    }else{
      component = <Dashboard theme={theme} />
    }

    return (
      <Layout className={this.state.light_mode ? 'light-mode' : 'dark-mode'}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={this.state.light_mode ? 'light-mode' : 'dark-mode'} style={{position: "fixed", height: "100%", zIndex: 1}}>
          <div className={this.state.light_mode ? "logo-light": "logo-dark"} >{this.state.collapsed ? 'TM' : 'TaskMate'}</div>
          <Menu theme={this.state.light_mode ? "light" : "dark"} mode="inline" defaultSelectedKeys={[location.pathname]}>
            <Menu.Item key="/" icon={<UserOutlined />} className='#1'>
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="/dashboard" icon={<VideoCameraOutlined />} className='#2'>
              <NavLink to="/">Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item key="/tasks" icon={<OrderedListOutlined />} className='#3'>
              <NavLink to="/tasks" activeClassName='is-active'>My tasks</NavLink> 
            </Menu.Item>
            <Menu.Item key="/in-progress" icon={<OrderedListOutlined />} className='#4'>
              <NavLink to="/in-progress">In Progress</NavLink> 
            </Menu.Item>
            <Menu.Item key="/invite" icon={<MailOutlined />}>
              <NavLink to="/invite">Invite</NavLink>
            </Menu.Item>
            <Menu.Item key="/groups" icon={<UsergroupAddOutlined />}>
              <NavLink to="/groups">Groups</NavLink>
            </Menu.Item>
          </Menu>
          <br />
          <Button
            style={{
              color: `${this.state.light_mode ? '#1890ff' : 'rgba(255, 255, 255, 0.65)' }`,
              outline: 'none',
            }}
            onClick={this.state.light_mode ? this.enableDarkMode : this.enableLightMode}
            fullWidth={true}
            >
            {this.state.light_mode ? "Dark Mode" : "Light Mode"}
          </Button>
        </Sider>
        <Layout className={this.state.light_mode ? "site-layout-light" : "site-layout-dark"}>
          <Header className={this.state.light_mode ? "site-layout-background-light" : "site-layout-background-dark"} style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: `${this.state.light_mode ? 'trigger-light': 'trigger-dark'}`,
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className={this.state.light_mode ? "site-layout-background-light" : "site-layout-background-dark"}
            style={{
              marginLeft: "200px",
              padding: 24,
              minHeight: 1280,
            }}
          >
          {component}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Sidebar);