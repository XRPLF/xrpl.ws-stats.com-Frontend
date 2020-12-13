import React from 'react';
import axios from "axios";
import BadgeList from '../components/BadgeList';
import Top20CountryList from '../components/Top20CountryList';
import EdgeTraffic from '../components/EdgeTraffic';
import NodeList from '../components/NodeList';
import StatusMessage from '../components/StatusMessage';
import TrafficGraph from '../components/TrafficGraph';

export default class Index extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.getStatusMessage = this.getStatusMessage.bind(this);
        this.getEdgeData = this.getEdgeData.bind(this);
        this.getNodesData = this.getNodesData.bind(this);
        this.getTrafficData = this.getTrafficData.bind(this);
        this.getEdgeConnectionsData = this.getEdgeConnectionsData.bind(this);
        this.getEdgeTrafficData = this.getEdgeTrafficData.bind(this);
    }

    componentDidMount() {
        this.getStatusMessage();
        this.getEdgeData();
        this.getNodesData();
        this.getTrafficData();
        this.getEdgeConnectionsData();
        this.getEdgeTrafficData();
    }

    async getEdgeData() {
        let data = await axios
            .get("https://stats.xrpl.ws/json/edges")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        this.setState({
            edges: data.data
        });
    }

    async getNodesData() {
        let data = await axios
            .get("https://stats.xrpl.ws/json/nodes")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        this.setState({
            nodes: data.data
        });
    }

    async getTrafficData() {
        let data = await axios
            .get("https://stats.xrpl.ws/json/traffic")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        this.setState({
            traffic: data.data
        });
    }

    async getEdgeConnectionsData() {
        let data = await axios
            .get("https://stats.xrpl.ws/json/edge-connections")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        this.setState({
            edgeConnections: data.data
        });
    }

    async getEdgeTrafficData() {
        let data = await axios
            .get("https://stats.xrpl.ws/json/edge-traffic")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        this.setState({
            edgeTraffic: data.data
        });
    }

    async getStatusMessage() {
        let data = await axios
            .get("/api/status-message.json")
            .then(function (response) {
                return response;
            })
            .catch(function(error) {
                console.log(error);
            });

        this.setState({
            statusMessage: data.data
        });
    }

    render() {

        if (!this.state.statusMessage ||
            !this.state.edgeTraffic ||
            !this.state.edgeConnections ||
            !this.state.traffic ||
            !this.state.nodes ||
            !this.state.edges
        ) {
            return (
                <div className="min-h-screen min-w-screen grid place-content-center">
                    <svg className="h-8 w-8 text-gray-600 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

        let nodes = Object.keys(this.state.nodes);

        return (
            <div className="pb-16">
                <div className="bg-xrpl-ws-blue pt-4 pb-2">
                    <div className="max-w-screen-xl mx-auto px-2">

                        <div className="flex">
                            <div className="flex-grow md:max-w-2/3">
                                <div className="text-xl text-white">
                                    <span className="font-bold">wss://xrpl.ws</span> <span className="block md:inline text-base"># Community XRPL Full History Cluster</span>
                                </div>
                                <div className="text-sm text-white mt-6">
                                    The stats shown on this page are from the XRPL.ws full-history cluster. For more information on how to access this community-sponsored resource please visit <a href="https://xrpl.ws/" className="underline">XRPL.ws</a>.
                                </div>
                            </div>
                            <div className="flex-grow-0 hidden md:block md:w-1/3 -mt-14 mr-10">
                                <img src="/assets/svg/cluster.svg" className="max-w-full max-y-full" />
                            </div>
                        </div>

                        <div className="space-y-4 mt-4">
                            <StatusMessage data={this.state.statusMessage} />
                        </div>
                    </div>
                </div>

                <div className="max-w-screen-xl mx-auto px-2">

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

                </div>

            </div>
        );
    }
}