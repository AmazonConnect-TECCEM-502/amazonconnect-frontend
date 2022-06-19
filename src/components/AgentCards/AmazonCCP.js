import React, { Component } from "react";
import "amazon-connect-streams";

// Class to embed Amazon CCP
class AmazonCCP extends Component {
    constructor(props) {
        super(props);
        this.containerDiv = React.createRef();
        this.onload = true;
        this.isCall = false;
    }

    // This is the equivalet of useEffect, which re-renders the component after change in state
    componentDidMount() {
        if(this.onload) {
	    // Embeding of Amazon CCP
            connect.core.initCCP(this.containerDiv.current, {
                ccpUrl: process.env.REACT_APP_CCP_URL,
                loginPopup: true,
                loginPopupAutoClose: true,
                region: "us-east-1", // Region is Virginia
                softphone: {
                    allowFramedSoftphone: true
                }
            });
            // Control variable used to lock the rendering to just once
            this.onload = false;
        }
    }

    // Function to render the component
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
