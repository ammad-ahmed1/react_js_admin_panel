import React, { useState } from 'react'
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Navs from './Navs';
import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
// import '../compnents/DashboardStyle.css'
const Dashboard = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSideBar = () => {
        console.log('Sidebar opened');
        setSidebar((prevState) => !prevState);
    }
   
    return (
        <div>
            <div className='row'>
                {/* <div className='col-4'>
                    <Sidebar sidebar={sidebar} />
                </div> */}
                <div className='col-8'>
                    <div className='row'>
                        <div className='col-11'>
                            <h1>table</h1>
                        </div>
                        <div className='col-1'>
                            <button className='btn btn-primary'>+</button>
                        </div>
                    </div>
                </div>
                {/* <button className='btn btn-primary'>+</button> */}

            </div>
        </div>
    )
}

export default Dashboard