import React from "react";
import axios from "axios";

import GoogleMap from "./GoogleMap";
import News from "./News";

class Home extends React.Component {
    state = {
        country: "",
    };

    getCountry = ({ lng, lat }) => {
        axios({
            method: "get",
            url: "/geo",
            params: {
                lng,
                lat,
            },
        }).then(({ data }) => {
            this.setState({
                country: data,
            });
        });
    };

    render() {
        return (
            <div>
                <div className="countryName">
                    <h2>
                        {this.state.country
                            ? `${this.state.country}`
                            : "Select a country"}
                    </h2>
                </div>
                <div className="mainHomePageContainer">
                    <GoogleMap getCountry={this.getCountry} />
                    <div className="displayNewsContainer">
                        <News country={this.state.country} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
