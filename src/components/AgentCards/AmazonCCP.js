import React, { Component } from "react";
import "amazon-connect-streams";

class AmazonCCP extends Component {
    constructor(props) {
        super(props);
        this.containerDiv = React.createRef();
        this.onload = true;
        this.isCall = false;
    }

    componentDidMount() {
        if(this.onload) {
            connect.core.initCCP(this.containerDiv.current, {
                ccpUrl: "https://tec2022bloqueaws.my.connect.aws/connect/ccp-v2/",
                loginPopup: true,
                loginPopupAutoClose: true,
                region: "us-east-1",
                softphone: {
                    allowFramedSoftphone: true
                }
            });

            this.onload = false;
        }
	}

    render() {
        return (
            <div>
                <h1>Contact Control Panel</h1>
                <div style={{ height: "450px" }} ref={this.containerDiv} />
            </div>
        );
    }
}

export default AmazonCCP;
