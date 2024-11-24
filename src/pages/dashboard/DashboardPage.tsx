import React, { lazy, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'; // Import for routing
import { envConfig } from '../../config/envConfig';

const DashboardLayout = lazy(() =>
    import(`../../clients/${envConfig.orgName}/dashboard/DashboardLayout.tsx`)
);

const { Header, Sider, Content } = Layout;

const DashboardPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
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
        <Layout>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                breakpoint="xs"
                onBreakpoint={(broken) => setCollapsed(broken)}
            
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
                    {location.pathname === '/' && <DashboardLayout />}
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardPage;
