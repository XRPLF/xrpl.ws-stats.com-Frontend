import React from 'react';
import axios from "axios";
import ActiveStatusMessage from '../components/ActiveStatusMessage';
import ClusterStats from '../components/ClusterStats';
import PastStatusMessage from '../components/PastStatusMessage';

export default class Index extends React.Component {

    constructor() {
        super();
        this.state = {};
        this.getStatusMessage = this.getStatusMessage.bind(this);
    }

    componentDidMount() {
        this.getStatusMessage();
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

        if (!this.state.statusMessage) {
            return (
                <div className="min-h-screen min-w-screen grid place-content-center">
                    <svg className="h-8 w-8 text-gray-600 animate-spin-reverse" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                </div>
            );
        }

        return (
            <div className="pb-16">
                <div className="bg-xrpl-ws-blue pt-4 pb-2">
                    <div className="max-w-screen-xl mx-auto px-2">

                        <div className="flex">
                            <div className="flex-grow md:max-w-2/3">
                                <div className="text-xl text-white">
                                    <a href="https://xrpl.ws" target="_blank"><span className="font-bold">wss://xrpl.ws</span> <span className="block md:inline text-base"># XRPL Full History Cluster</span></a>
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
                            <ActiveStatusMessage data={this.state.statusMessage} />
                        </div>

                        <PastStatusMessage data={this.state.statusMessage} />
                    </div>
                </div>

                <div className="max-w-screen-xl mx-auto px-2">
                    <ClusterStats />
                </div>

            </div>
        );
    }
}