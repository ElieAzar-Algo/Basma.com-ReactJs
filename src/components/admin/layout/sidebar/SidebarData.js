import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/admin/dashboard',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: 'Customers',
        path: '/admin/customers',
        icon: <IoIcons.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: "Logout",
        path: "/admin/login",
        icon: <AiIcons.AiOutlineLogout />,
        cName: "nav-text",
      },
    
]