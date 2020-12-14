import React from "react";

export default class StatusMessage extends React.Component {
    render () {
        let className = "";
        let subMessage = "";
        let data = this.props.data;

        if (!("active" in data) || data.active.length === 0) {
            data = [{
                status: 'success',
                title: 'Cluster Operational'
            }];
        } else {
            data = this.props.data.active;
        }

        let rows = data.map((message, index) => {

            if (message.status === 'success') {
                className = "bg-xrpl-ws-green";
            } else if (message.status === 'warn') {
                className = "bg-xrpl-ws-orange";
            } else {
                className = "bg-xrpl-ws-red";
            }

            if ('subMessage' in message && message.subMessage.length > 0) {
                subMessage = (<div className="text-base mt-2">{ message.subMessage }</div>);
            } else {
                subMessage = "";
            }

            return <div key={"message-" + index} className={className + " rounded text-white text-2xl p-6"}>
                <div className="font-bold">{ message.title }</div>
                { subMessage }
            </div>
        });

        return (
            [rows]
        );
    }
}