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
  UploadOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import Button from '@material-ui/core/Button';
const { Header, Sider, Content } = Layout;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
    light_mode: false,
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
    return (
      <Layout className={this.state.light_mode ? 'light-mode' : ''}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed} className={this.state.light_mode ? 'light-mode' : ''}>
          <div className={this.state.light_mode ? "logo-light": "logo-dark"} >{this.state.collapsed ? 'TM' : 'TaskMate'}</div>
          <Menu theme={this.state.light_mode ? "light" : "dark"} mode="inline" defaultSelectedKeys={[location.pathname]}>
            <Menu.Item key="/" icon={<UserOutlined />} className='#1'>
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="/dashboard" icon={<VideoCameraOutlined />} className='#2'>
              <NavLink to="/">Dashboard</NavLink>
            </Menu.Item>
            <Menu.Item key="/tasks" icon={<UploadOutlined />} className='#3'>
              <NavLink to="/tasks" activeClassName='is-active'>My tasks</NavLink> 
            </Menu.Item>
            <Menu.Item key="/invite" icon={<UploadOutlined />}>
              <NavLink to="/invite">Invite</NavLink>
            </Menu.Item>
            <Menu.Item key="/forum" icon={<UploadOutlined />}>
              <NavLink to="/">Forum</NavLink>
            </Menu.Item>
          </Menu>
          <br />
          <Button
            style={{
              color: `${this.state.light_mode ? '#1890ff' : 'rgba(255, 255, 255, 0.65)' }`,
              outline: 'none',
              'margin-left': '40px'
            }}
            onClick={this.state.light_mode ? this.enableDarkMode : this.enableLightMode}
            icon={
              <BulbOutlined />
            }>
            {this.state.light_mode ? "Dark Mode" : "Light Mode"}
          </Button>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 1280,
            }}
          >
          {this.props.component}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Sidebar);