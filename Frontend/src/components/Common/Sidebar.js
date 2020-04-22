import React, {Component} from 'react'
//UI imports
import {slide as Menu} from 'react-burger-menu';
// Redux imports
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {getProfile} from "../../actions/userProfileActions";
// CSS
import "../../css/sidebar.css";

const UserRoles = require("../../utils/Constants").UserRoles;

export class Sidebar extends Component {
    state = {
        userExists: false,
        role: null
    }

    componentWillMount() {
        // TODO: get email from local storage
        // const email = localStorage.getItem("email");
        const email = "divjyot@gmail.com";

        if (email != null) {
            this.props.getProfile(email, (response) => {
                if (response.status === 200) {
                    this.setState({
                        role: response.data.role,
                        userExists: true
                    })
                }
            })
        }
    }


    render() {
        const role = this.state.userExists ? this.state.role : null;
        const ratingLink = role ? (role == UserRoles.INFLUENCER ? "/ratings/influencer" : "/ratings/sponsor") : "/"

        return (
            <div>
                <Menu>
                    <a className='menu-item' href='/'>Home</a>
                    <a className='menu-item' href='/profile'>Profile</a>
                    <a className='menu-item' href='/dashboard'>Dashboard</a>
                    <a className='menu-item' href="/">Analytics</a>
                    <a className='menu-item' href='/inbox'>Inbox</a>
                    <a className='menu-item' href={ratingLink}>My Ratings</a>
                </Menu>
            </div>
        )
    }
}

Sidebar.protoTypes = {
    getProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

export default connect(null, {getProfile})(Sidebar)
