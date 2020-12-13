import React from "react";

export default class SimpleNodeList extends React.Component {
    render () {

        let type = "yellow";

        if (this.props.type === "edge") {
            type = "green";
        }

        let rows = this.props.nodes.map((node, index) => {
            return <div key={"node-" + index} className={"bg-xrpl-ws-" + type + "-badge-background rounded inline-block uppercase text-xrpl-ws-" + type + "-badge-text text-xs p-1 mt-1"}>
                { node }
            </div>
        });

        return (
            [rows]
        );
    }
}