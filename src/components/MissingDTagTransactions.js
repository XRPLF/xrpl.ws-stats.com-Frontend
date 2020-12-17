import React from "react";

export default class MissingDTagTransactions extends React.Component {
    render () {

        let className = "";
        let rows = [];
        let index = 0;
        let accounts = this.props.data.dtag_accounts_without_flag.details;

        for (let key in accounts) {

            if (index % 2) {
                className = "bg-gray-50";
            } else {
                className = "bg-white";
            }

            let addresses = accounts[key].accounts.map((account, index) => {
                return <div key={"address-" + index} className="bg-gray-200 text-gray-500 inline-block rounded text-xs p-1">
                    { account }
                </div>
            });

            rows.push(
                <tr key={"dtag-row-" + index} className={className}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ accounts[key].name }</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden lg:block space-x-1">{[ addresses ]}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 uppercase">{ accounts[key].txCount.toLocaleString() }</td>
                </tr>
            );

            index++;
        }

        return (
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Account Owner
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:block">
                            Destination Address
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Transaction Count
                        </th>
                    </tr>
                </thead>
                <tbody>{[rows]}</tbody>
                <tfoot>
                    <tr>
                        <td></td>
                        <td className="hidden lg:block"></td>
                        <td className="px-6 py-4 text-gray-500 font-bold">{ this.props.data.dtag_accounts_without_flag.count.toLocaleString() }</td>
                    </tr>
                </tfoot>
            </table>
        );
    }
}