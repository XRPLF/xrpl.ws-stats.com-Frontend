import React from "react";

export default class EdgeTraffic extends React.Component {
    render () {

        let className = "";
        let rows = [];
        let index = 0;
        let edges = this.props.data;

        for (let key in edges) {

            if (index % 2) {
                className = "bg-gray-50";
            } else {
                className = "bg-white";
            }

            rows.push(
                <tr key={"edge-row-" + index} className={className}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="bg-xrpl-ws-green-badge-background rounded inline-block uppercase text-xrpl-ws-green-badge-text text-xs p-1 mt-1">{ key }</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ edges[key].now.activeConns.toLocaleString() }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ edges[key].now.bandwidthMbitS.toLocaleString() } Mbps</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ edges[key].peak24h.activeConns.toLocaleString() }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ edges[key].peak24h.bandwidthMbitS.toLocaleString() } Mbps</td>
                </tr>
            );

            index++;
        }

        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">

                        </th>
                        <th scope="col" colSpan={2} className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center border-b border-r border-gray-200">
                            Current
                        </th>
                        <th scope="col" colSpan={2} className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center border-b border-gray-200">
                            24-Hour Peak
                        </th>
                    </tr>
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Edge
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Connections
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">
                            Bandwidth
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Connections
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Bandwidth
                        </th>
                    </tr>
                </thead>
                <tbody>{[rows]}</tbody>
            </table>
        );
    }
}