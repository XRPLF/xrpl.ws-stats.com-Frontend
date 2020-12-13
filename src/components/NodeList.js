import React from "react";

export default class NodeList extends React.Component {
    render () {

        let className = "";
        let rows = [];
        let index = 0;
        let nodes = this.props.data;

        for (let key in nodes) {

            if (index % 2) {
                className = "bg-gray-50";
            } else {
                className = "bg-white";
            }

            rows.push(
                <tr key={"edge-row-" + index} className={className}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div key={"node-" + index} className="bg-xrpl-ws-yellow-badge-background rounded inline-block uppercase text-xrpl-ws-yellow-badge-text text-xs p-1 mt-1">
                            { key }
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ nodes[key].pubkey }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ nodes[key].operator }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">{ nodes[key].region }</td>
                </tr>
            );

            index++;
        }

        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Node
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Public Key
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Operator
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Region
                        </th>
                    </tr>
                </thead>
                <tbody>{[rows]}</tbody>
            </table>
        );
    }
}