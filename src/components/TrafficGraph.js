import React, { Component } from 'react';
import {
    CartesianGrid,
    Legend,
    LineChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
var moment = require('moment');

export default class TrafficGraph extends Component {
    render() {

        let rawData = this.props.data.time_series;
        let data = [];
        let date = '';

        for (let i = 0; i < rawData.length; i++) {
            date = moment(rawData[i].start, "YYYY-MM-DDTHH:mm:ssZ");

            data.push({
                label: date.format("YYYY-MM-DD"),
                bandwidth: rawData[i].bandwidthGB,
                websockets: rawData[i].websockets
            });
        }

        return (
            <ResponsiveContainer width="100%" height={500}>
                <LineChart
                    data={data}
                    margin={{
                        top: 0,
                        right: 30,
                        left: 10,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="label" />
                    <YAxis
                        yAxisId="left"
                        type="number"
                        dataKey="bandwidth"
                        name="Bandwidth"
                        unit="GB"
                        stroke="#0033cc"
                    />
                    <YAxis
                        yAxisId="right"
                        type="number"
                        dataKey="websockets"
                        name="Websockets"
                        orientation="right"
                        stroke="#28a745"
                        tickFormatter={(value) => [new Intl.NumberFormat('en').format(value)]}
                    />
                    <Tooltip formatter={(value, name) => [new Intl.NumberFormat('en').format(value), name]} />
                    <Legend />
                    <Line yAxisId="left" dataKey="bandwidth" stroke="#0033cc" unit=" GB" name="Bandwidth" />
                    <Line yAxisId="right" dataKey="websockets" stroke="#28a745" name="Websocket Connections" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}