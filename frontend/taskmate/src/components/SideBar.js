import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import './SideBar.css'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

class Sidebar extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" >{this.state.collapsed ? 'TM' : 'TaskMate'}</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />} className='#1'>
              <NavLink to="">Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />} className='#2'>
              Dashboard
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />} className='#3'>
              <NavLink to="/tasks" >My tasks</NavLink> 
            </Menu.Item>
            <Menu.Item key="4" icon={<UploadOutlined />}>
              Achievements
            </Menu.Item>
            <Menu.Item key="5" icon={<UploadOutlined />}>
              Forum 
            </Menu.Item>

          </Menu>
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

export default Sidebar;