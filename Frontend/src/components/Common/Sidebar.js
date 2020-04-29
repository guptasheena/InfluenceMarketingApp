import React, {Component} from "react";
//UI imports
import {slide as Menu} from "react-burger-menu";
// CSS
import "../../css/sidebar.css";
import {getEmailFromLocalStorage, getRoleFromLocalStorage} from "../Common/auth";
import {Redirect} from "react-router";

const UserRoles = require("../../utils/Constants").UserRoles;

export class Sidebar extends Component {

    render() {
        const role = getRoleFromLocalStorage();
        let redirectVar = null;
        if (!getEmailFromLocalStorage()) {
            redirectVar = <Redirect to="/"/>;
        }

        if (role === UserRoles.INFLUENCER) {
            return (
                <div>
                    {redirectVar}
                    <Menu>
                        <a className="menu-item" href="/">
                            Home
                        </a>
                        <a className="menu-item" href="/profile">
                            Profile
                        </a>
                        <a className="menu-item" href="/dashboard">
                            Dashboard
                        </a>
                        <a className="menu-item" href="/analytics">
                            Analytics
                        </a>
                        <a className="menu-item" href="/inbox">
                            Inbox
                        </a>
                        <a className="menu-item" href="/ratings">
                            My Ratings
                        </a>
                    </Menu>
                </div>
            );

        } else {
            // user is sponsor
            return (
                <div>
                    {redirectVar}
                    <Menu>
                        <a className="menu-item" href="/">
                            Home
                        </a>
                        <a className="menu-item" href="/profile">
                            Profile
                        </a>
                        <a className="menu-item" href="/task/new">
                            Create Task
                        </a>
                        <a className="menu-item" href="/dashboard">
                            Dashboard
                        </a>
                        <a className="menu-item" href="/">
                            Analytics
                        </a>
                        <a className="menu-item" href="/inbox">
                            Inbox
                        </a>
                        <a className="menu-item" href="/ratings">
                            My Ratings
                        </a>
                    </Menu>
                </div>
            );
        }
    }
}

export default Sidebar;
