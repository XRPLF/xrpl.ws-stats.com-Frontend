import React from "react";
var moment = require('moment');

export default class PastStatusMessage extends React.Component {
    render () {
        let className = "";
        let subMessage = "";
        let data = this.props.data;
        let startDate = "";
        let endDate = "";

        if (!("past" in data) || data.past.length === 0) {
            return null;
        } else {
            data = data.past.slice(0, 3);
        }

        let rows = data.map((message, index) => {

            startDate = moment(message.start, "YYYY-MM-DDTHH:mm:ssZ");
            endDate = moment(message.end, "YYYY-MM-DDTHH:mm:ssZ");

            if (message.status === 'success') {
                className = "bg-xrpl-ws-green-secondary";
            } else if (message.status === 'warn') {
                className = "bg-xrpl-ws-orange-secondary";
            } else {
                className = "bg-xrpl-ws-red-secondary";
            }

            if ('subMessage' in message && message.subMessage.length > 0) {
                subMessage = (<div className="text-base mt-1">{ message.subMessage }</div>);
            } else {
                subMessage = "";
            }

            return <div key={"past-msg-" + index} className={className + " rounded text-white py-2 px-6"}>
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-xl font-bold">
                        { message.title }
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-4">
                        { startDate.format("YYYY-MM-DD HH:mm Z") } to { endDate.format("YYYY-MM-DD HH:mm Z") }
                    </div>
                </div>
                { subMessage }
            </div>
        });

        return (
            <div className="mt-6">
                <div className="text-gray-200">
                    Past Status Messages
                </div>
                <div className="space-y-1 mt-2">
                    {[rows]}
                </div>
            </div>
        );
    }
}