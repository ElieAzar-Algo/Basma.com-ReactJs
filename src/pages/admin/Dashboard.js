import React from 'react';
import Navbar from '../../components/admin/layout/sidebar/Navbar';


function Dashboard (props){
    
    return (
        <>
        <Navbar 
        // token={token}
        />
        <div className="dashboard">
        <h1>Dashboard</h1>
        </div>
        </>
    )
   
}

export default Dashboard;