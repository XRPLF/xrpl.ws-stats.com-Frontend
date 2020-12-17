import React from "react";
import ReactCountryFlag from "react-country-flag"

export default class Top20CountryList extends React.Component {
    render () {

        let cards = [];
        let index = 0;
        let topCountries = this.props.data.client_origin.top20_traffic_percentage;

        for (let key in topCountries) {

            cards.push(
                <div key={"country-" + index} className="py-4 px-2">
                    <div className="flex overflow-hidden h-8 rounded-lg bg-gray-50 shadow border-b border-gray-200">
                        <ReactCountryFlag
                            countryCode={key}
                            svg
                            style={{
                                width: 'auto',
                                height: 'inherit'
                            }}
                            className="flex-none"
                            title={key}
                        />
                        <div className="flex-grow leading-9 text-center text-sm">{ topCountries[key] }%</div>
                    </div>
                </div>
            );

            index++;
        }

        return (
            [cards]
        );
    }
}