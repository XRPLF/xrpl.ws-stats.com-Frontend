import React from "react";
import MiddleEllipsis from 'react-middle-ellipsis';

export default class MissingDTagTransactions extends React.Component {
    render () {

        let className = "";
        let rows = [];
        let index = 0;
        let accounts = this.props.data.dtag_accounts_without_flag.details;
        accounts = accounts.sort((a, b) => (a.name > b.name) ? 1 : -1);

        for (let key in accounts) {

            if (index % 2) {
                className = "bg-gray-50";
            } else {
                className = "bg-white";
            }

            let addresses = accounts[key].accounts.map((account, index) => {
                return (
                    <div key={"address-" + index} className="bg-gray-200 text-gray-500 inline-block rounded text-xs p-1 max-w-15ch md:max-w-25ch lg:max-w-none">
                        <MiddleEllipsis>
                            <span>{ account }</span>
                        </MiddleEllipsis>
                    </div>
                );
            });

            rows.push(
                <tr key={"dtag-row-" + index} className={className}>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ accounts[key].name }</td>
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-500 space-x-1 space-y-1">{[ addresses ]}</td>
                    <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">{ accounts[key].txCount.toLocaleString() }</td>
                </tr>
            );

            index++;
        }

        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Account Owner
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Destination Address
                        </th>
                        <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            <span className="hidden md:inline">Transaction</span><span className="inline md:hidden">Tx</span> Count
                        </th>
                    </tr>
                </thead>
                <tbody>{[rows]}</tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td className="px-4 md:px-6 py-4 text-gray-500 font-bold">{ this.props.data.dtag_accounts_without_flag.count.toLocaleString() }</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}