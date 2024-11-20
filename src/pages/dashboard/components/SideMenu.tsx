import React, { useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { key: 'dashboard', icon: <PieChartOutlined />, label: 'Dashboard' },
    { key: 'language', icon: <DesktopOutlined />, label: 'Language' },
];

const SideMenu: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const handleMenuClick: MenuProps['onClick'] = (e) => {
        navigate(`/${e.key}`);
    };

    return (
        <div className="flex flex-row-reverse">

            <Button
                type="primary"
                onClick={toggleCollapsed}
                className={`m-2 bg-blue-500 border-none hover:bg-blue-600`}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>

            {/* <div className='flex'> */}
                <Menu
                    className={`bg-gray-800 text-white py-10 rounded shadow-lg ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300`}
                    theme="dark"
                    mode="vertical"
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={handleMenuClick}
                   defaultSelectedKeys={['dashboard']}
                />

            {/* </div> */}
        </div>
    );
};

export default SideMenu;
