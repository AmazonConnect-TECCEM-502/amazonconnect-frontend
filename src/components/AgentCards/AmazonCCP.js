import React, { Component } from "react";
import "amazon-connect-streams";

class AmazonCCP extends Component {
    constructor(props) {
        super(props);
        this.containerDiv = React.createRef();
	    this.onload = true;
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

            const eventBus = connect.core.getEventBus();
            eventBus.subscribe(connect.EventType.TERMINATED, () => {
                    console.log("============================");
                    console.log('Logged out');
                    console.log("============================");
                });

            connect.contact(function (contact) {
                // Called when the contact is finished (including After Call Work)
                contact.onDestroy(function(contact) { 
                    console.log("============================");
                    console.log('DESTROYED CONTAAAACT');
                    console.log("============================");
                });
                // Called both then the call and ACW finish
                contact.onEnded(function(contact) { 
                    console.log("============================");
                    console.log('ENDED CONTAAAACT');
                    console.log("============================");
                });
                // Called when a new call starts
                contact.onAccepted(function (contact) {
                    console.log("============================");
                    console.log('ACCEPTED CONTAAAACT');
                    console.log("============================");

                });
                contact.onMissed(function (contact) {
                    console.log("============================");
                    console.log('MISSED CONTAAAACT');
                    console.log("============================");
                });
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
