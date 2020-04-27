import React, {Component} from "react";
import {Route} from "react-router-dom";
// Routes
// Common
import Appbar from "./Common/Appbar"
import Sidebar from "./Common/Sidebar"
//Search
import SearchTasks from "./Search/SearchTasks";
import SearchPeople from "./Search/SearchPeople";
// User Profile
import UserProfile from "./UserProfile/userProfile";
// Dashboard
import Dashboard from "./Dashboard/Dashboard";
// Task
import PostTask from "./Task/postTask";
// Inbox
import Messenger from "./Inbox/Messenger";
// Rating
import SponsorRating from "./Rating/sponsorRating";
import InfluencerRating from "./Rating/influencerRating";
import TaskDescription from "./Task/TaskDescription";
import Landing from "./LandingPage/LandingPage";
import SponsorHome from "./Home/SponsorHome";
import About from "./About/About";
import ContactUs from "./ContactUs/ContactUs";

class Main extends Component {

    render() {
        return (
            <div>
                <Route path="/" component={Appbar}/>
                <Route path="/" component={Sidebar}/>
                <Route path="/search/tasks" exact component={SearchTasks}/>
                <Route path="/search/people" exact component={SearchPeople}/>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/profile" exact component={UserProfile}/>
                <Route path="/task/new" exact component={PostTask}/>
                <Route path="/task" exact component={TaskDescription}/>
                <Route path="/inbox" exact component={Messenger}/>
                <Route path="/ratings/sponsor" exact component={SponsorRating}/>
                <Route path="/ratings/influencer" exact component={InfluencerRating}/>
                <Route path="/about" exact component={About}/>
                <Route path="/home/sponsor" exact component={SponsorHome}/>
            
        <Route path="/home" component={Landing} />
<Route path="/contactus" component={ContactUs} />
                <Route exact path="/" component={Landing}/>
            </div>
        );
    }

}

export default Main;
