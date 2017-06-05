
import * as React from 'react';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default class AppFrame extends React.Component<any, any> {
    render() {
        console.log("Rendered AppFrame")
        return <div>
            <h1>App</h1>
            {this.props.children}
        </div>;
    }
}
