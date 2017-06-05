
import * as React from 'react';

export interface GoodbodyProps {
    name: string;
}

export default class Goodbody extends React.Component<GoodbodyProps, any> {
    constructor(props: GoodbodyProps) {
        super(props);
    }

    render() {
        console.log("Rendered Goodbody")
        return <p>Hello, {this.props.name}!</p>;
    }
}
