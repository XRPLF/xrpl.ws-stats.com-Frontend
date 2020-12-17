import React from "react";
import axios from "axios";
import BadgeList from '../components/BadgeList';
import EdgeTraffic from '../components/EdgeTraffic';
import MissingDTagTransactions from '../components/MissingDTagTransactions';
import NodeList from '../components/NodeList';
import Top20CountryList from '../components/Top20CountryList';
import TrafficGraph from '../components/TrafficGraph';

export default class SimpleNodeList extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.getEdgeData = this.getEdgeData.bind(this);
        this.getNodesData = this.getNodesData.bind(this);
        this.getTrafficData = this.getTrafficData.bind(this);
        this.getEdgeConnectionsData = this.getEdgeConnectionsData.bind(this);
        this.getEdgeTrafficData = this.getEdgeTrafficData.bind(this);
        this.getMissingDTagWalletsData = this.getMissingDTagWalletsData.bind(this);
    }

    componentDidMount() {
        this.getEdgeData();
        this.getNodesData();
        this.getTrafficData();
        this.getEdgeConnectionsData();
        this.getEdgeTrafficData();
        this.getMissingDTagWalletsData();
    }

    async getEdgeData() {
        let data = await axios
            .get("https://xrpl.ws-stats.com/json/edges")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        if (data !== undefined) {
            this.setState({
                edges: data.data
            });
        }
    }

    async getNodesData() {
        let data = await axios
            .get("https://xrpl.ws-stats.com/json/nodes")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        if (data !== undefined) {
            this.setState({
                nodes: data.data
            });
        }
    }

    async getTrafficData() {
        let data = await axios
            .get("https://xrpl.ws-stats.com/json/traffic")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        if (data !== undefined) {
            this.setState({
                traffic: data.data
            });
        }
    }

    async getEdgeConnectionsData() {
        let data = await axios
            .get("https://xrpl.ws-stats.com/json/edge-connections")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        if (data !== undefined) {
            this.setState({
                edgeConnections: data.data
            });
        }
    }

    async getEdgeTrafficData() {
        let data = await axios
            .get("https://xrpl.ws-stats.com/json/edge-traffic")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        if (data !== undefined) {
            this.setState({
                edgeTraffic: data.data
            });
        }
    }

    async getMissingDTagWalletsData() {
        let data = await axios
            .get("https://xrpl.ws-stats.com/json/filtered")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        if (data !== undefined) {
            this.setState({
                missingDTagWallets: data.data
            });
        }
    }

    render () {

        if (!this.state.missingDTagWallets ||
            !this.state.edgeTraffic ||
            !this.state.edgeConnections ||
            !this.state.traffic ||
            !this.state.nodes ||
            !this.state.edges
        ) {
            return (
                <div className="mt-16">
                    <div className="text-center text-lg mb-2">Loading Stats</div>
                    <svg className="h-8 w-8 mx-auto text-gray-600 animate-spin-reverse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </div>
            );
        }

        let edges = [];

        for (const key in this.state.edges) {
            if (key !== 'backup') {
                edges.push(key);
            }
        }

        let nodes = Object.keys(this.state.nodes).map(k => {
            if (typeof this.state.nodes[k].code !== 'undefined') {
                return this.state.nodes[k].code;
            }
            return k;
        });

        return (
            <div>
                <div className="max-w-5xl mx-auto">
                    <dl className="rounded-lg bg-white shadow grid grid-cols-1 md:grid-cols-3 mt-10">
                        <div className="flex flex-col border-b border-gray-100 p-6 text-center border-0 border-r">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                Edge Locations
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-xrpl-ws-blue">
                                { edges.length }
                            </dd>
                            <div className="mt-1 order-3 space-x-1.5">
                                <BadgeList type="edge" nodes={edges} />
                            </div>
                        </div>
                        <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                Full-History Nodes
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-xrpl-ws-blue">
                                { nodes.length }
                            </dd>
                            <div className="mt-1 order-3 space-x-1.5">
                                <BadgeList type="node" nodes={nodes} />
                            </div>
                        </div>
                        <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                Active Connections
                            </dt>
                            <dd className="order-1 text-5xl font-extrabold text-xrpl-ws-blue">
                                { this.state.edgeConnections.active_client_count.toLocaleString() }
                            </dd>
                            <div className="mt-2 order-3 text-sm text-gray-500">
                                { this.state.traffic.client_origin.unique_countries } Unique Countries
                            </div>
                        </div>
                    </dl>
                </div>

                <div className="text-4xl font-bold text-center text-gray-900 mt-16">Top-20 Client Countries</div>

                <div className="mt-6">
                    <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 lg:grid-cols-10">
                        <Top20CountryList data={this.state.traffic} />
                    </div>
                </div>

                <div className="text-4xl font-bold text-center text-gray-900 mt-16">30-Day Cluster Stats</div>

                <dl className="rounded-lg bg-white shadow grid grid-cols-1 lg:grid-cols-3 mt-6">
                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                            Bandwidth
                        </dt>
                        <dd className="order-1 text-5xl md:text-4xl xl:text-5xl font-extrabold text-xrpl-ws-blue">
                            { this.state.traffic.bandwidth_TB } TB
                        </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                            Unique Websocket Clients
                        </dt>
                        <dd className="order-1 text-5xl md:text-4xl xl:text-5xl font-extrabold text-xrpl-ws-blue">
                            { this.state.traffic.unique_ws_clients.toLocaleString() }
                        </dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                            Total Websocket Connections
                        </dt>
                        <dd className="order-1 text-5xl md:text-4xl xl:text-5xl font-extrabold text-xrpl-ws-blue">
                            { this.state.traffic.websocket_connection_count.toLocaleString() }
                        </dd>
                    </div>
                </dl>

                <div className="bg-white overflow-hidden shadow rounded-lg mt-6 px-2">
                    <div className="px-4 py-5 sm:p-6">
                        <TrafficGraph data={this.state.traffic} />
                    </div>
                </div>

                <div className="text-4xl font-bold text-center text-gray-900 mt-16">Edge Connections &amp; Bandwidth</div>

                <div className="flex flex-col mt-6 px-2">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                                <EdgeTraffic data={this.state.edgeTraffic} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-4xl font-bold text-center text-gray-900 mt-16">Full-History Nodes</div>

                <div className="flex flex-col mt-6">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                                <NodeList data={this.state.nodes} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-4xl font-bold text-center text-gray-900 mt-16">Missing Destination Tag</div>
                <div className="text-base mt-6 px-2 text-center text-gray-800">
                        The destination addresses listed below are addresses that <span className="font-bold italic">should</span>
                        have <span className="bg-gray-200 text-gray-500 inline-block rounded p-1">RequireDest</span>
                        <a href="https://xrpl.org/require-destination-tags.html" className="underline">set on the account</a>.
                        By setting <span className="bg-gray-200 text-gray-500 inline-block rounded p-1">RequireDest</span> on the account,
                        the exchange would be ensuring that users sending XRP will have it credited to their account. If you are an exchange,
                        this means less support requests and happier clients!</div>
                <div className="flex flex-col mt-6 px-2">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 rounded-lg">
                                <MissingDTagTransactions data={this.state.missingDTagWallets} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
