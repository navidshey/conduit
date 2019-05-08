import Navbar from './NavBar'
import React  from 'react';

const MasterPage = ({ children })=>
    <div>
        <Navbar></Navbar>
        {children}
    </div>


export default MasterPage;