
import * as React from 'react';
import { Link } from 'react-router';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Hello from '../components/Hello';
import Goodbody from '../components/Goodbody';

var HomeView = React.createClass({
    getInitialState: function() {
        return { loaded: false };
    },
    
    componentDidMount: function() {
        this.setState({ loaded: true });
    },
    
    render: function() {
        console.log("Rendered HomeView")
        var loading = this.state.loaded ? "" : " (loading...)";
        return (
            <div>
            <h2>HomeView {loading}</h2>
            <Hello name="world" />
            <h3>HomeView {loading}</h3>
            <Goodbody name = "dick" />
            <div><Link to="/about">About</Link></div>
        </div>
        );
    }
});

export default HomeView;
