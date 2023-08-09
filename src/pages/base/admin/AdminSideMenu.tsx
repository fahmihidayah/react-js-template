import React from "react";
import "../../../styles.css"
import { Link } from "react-router-dom";

export const AdminSideMenu : React.FC = () => {
    return <div id="layoutSidenav_nav">
    <nav  className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
        <div  className="sb-sidenav-menu">
            <div  className="nav">
                <div  className="sb-sidenav-menu-heading">Core</div>
                <Link className="nav-link" to="/admin">
                    <div  className="sb-nav-link-icon"><i  className="fas fa-tachometer-alt"></i></div>
                    Dashboard
                </Link>
                <Link className="nav-link" to="/admin/users">
                    <div  className="sb-nav-link-icon"><i  className="fas fa-tachometer-alt"></i></div>
                    Users
                </Link>
                <Link className="nav-link" to="/admin/roles">
                    <div  className="sb-nav-link-icon"><i  className="fas fa-tachometer-alt"></i></div>
                    Roles
                </Link>
                
                
                
            </div>
        </div>
        <div  className="sb-sidenav-footer">
            <div  className="small">Logged in as:</div>
            Admin
        </div>
    </nav>
</div>
}