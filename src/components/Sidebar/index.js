import React from "react";
import { Menu, Layout } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { menuItems } from './menuItems';
import * as S from './styles';

const { SubMenu } = Menu;
class Sider extends React.Component {
  state = {
    current: '1',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        theme='dark'
        onClick={this.handleClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[this.state.current]}
        mode="inline"
      >

        {/* <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
          
            <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu> */}

        {menuItems.map(item => (
          <div key={item.name} style={S.menuItem}>
            {item.icon}
            <Menu.Item style={{marginLeft: '20px'}}>{item.name}</Menu.Item>
          </div>)
        )}
      </Menu>
    );
  }
}

export default Sider;