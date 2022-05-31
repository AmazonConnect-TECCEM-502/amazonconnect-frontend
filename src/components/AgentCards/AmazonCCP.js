import { Component } from 'react';
import React from 'react';
import 'amazon-connect-streams';

class AmazonCCP extends Component {
    constructor(props) {
        super(props);
        this.containerDiv = React.createRef();
    }

    componentDidMount() {
        connect.core.initCCP(this.containerDiv.current, {
            ccpUrl: 'https://tec2022bloqueaws.my.connect.aws/connect/ccp-v2/',
            loginPopup: true,
            softphone: {
                allowFramedSoftphone: true
            }
        });
    }

    render() {
        return (
            <div className="ccp">
                <h1>Contact Control Panel</h1>
                <div style={{width: "400px", height: "500px" }} className="containerDiv" ref={this.containerDiv} />
            </div>
        );
    }
}

export default AmazonCCP;