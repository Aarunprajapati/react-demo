import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import LineChart from './components/LineChart';


const { Header, Sider, Content } = Layout;


const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'Dashboard',
      route: '/',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'Language',
      route: '/language',
    },
  ];

  const handleMenuClick = ({ key }: { key: string }) => {
    const selectedItem = menuItems.find((item) => item.key === key);
    if (selectedItem) {
      navigate(selectedItem.route);
    }
  };

  return (
    <div className='dashboard-layout'>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          breakpoint="xs"
          onBreakpoint={(broken) => setCollapsed(broken)}
          className='h-screen'
        >
          <div className="w-12 h-12 m-4 mx-auto bg-white rounded-full" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}
            onClick={handleMenuClick}
            items={menuItems.map((item) => ({
              key: item.key,
              icon: item.icon,
              label: item.label,
            }))}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {location.pathname === '/' && <LineChart />}
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

export default DashboardLayout
