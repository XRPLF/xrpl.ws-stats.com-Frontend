import React from "react";
import MiddleEllipsis from 'react-middle-ellipsis';

export default class PreventedScam extends React.Component {
    render () {

        let className = "";
        let rows = [];
        let index = 0;
        let scams = this.props.data.scams;

        for (let account in scams) {

            if (index % 2) {
                className = "bg-gray-50";
            } else {
                className = "bg-white";
            }

            rows.push(
                <tr key={"scam-" + index} className={className}>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="bg-gray-200 text-gray-500 inline-block rounded text-xs p-1 max-w-15ch md:max-w-25ch lg:max-w-none">
                            <MiddleEllipsis>
                                <span>{ account }</span>
                            </MiddleEllipsis>
                        </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ scams[account].count.toLocaleString() }</td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ scams[account].amount.toLocaleString() }</td>
                </tr>
            );

            index++;
        }

        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Scam Account
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <span className="hidden md:inline">Transaction</span><span className="inline md:hidden">Tx</span> Count
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Total XRP
                        </th>
                    </tr>
                </thead>
                <tbody>{[rows]}</tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td className="px-4 md:px-6 py-4 text-gray-500 font-bold">{ this.props.data.count.toLocaleString() }</td>
                        <td className="px-4 md:px-6 py-4 text-gray-500 font-bold">{ this.props.data.xrp.toLocaleString() }</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}