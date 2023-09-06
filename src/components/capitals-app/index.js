import { useState } from "react";
import OptionsCapitals from "./capitals";
import "./index.css";

const countryAndCapitalsList = [
    {
        id: "NEW_DELHI",
        capitalDisplayText: "New Delhi",
        country: "India"
    },
    {
        id: "LONDON",
        capitalDisplayText: "London",
        country: "United Kingdom"
    },
    {
        id: "PARIS",
        capitalDisplayText: "Paris",
        country: "France"
    },
    {
        id: "KATHMANDU",
        capitalDisplayText: "Kathmandu",
        country: "Nepal"
    },
    {
        id: "HELSINKI",
        capitalDisplayText: "Helsinki",
        country: "Finland"
    },
    {
        id: "BEJING",
        capitalDisplayText: "Bejing",
        country: "China"
    },
    {
        id: "TOKYO",
        capitalDisplayText: "Tokyo",
        country: "Japan"
    },
    {
        id: "WASHINGTON_DC",
        capitalDisplayText: "Washington DC",
        country: "United States of America"
    },
    {
        id: "MOSCOW",
        capitalDisplayText: "Moscow",
        country: "Russia"
    },
    {
        id: "ROME",
        capitalDisplayText: "Rome",
        country: "Italy"
    },
]

const CapitalsApp = () => {

    const [selectedId, setSelectId] = useState(countryAndCapitalsList[0].id);

    const changeCapital = (event) => {
        const optionValue = event.target.value;
        setSelectId(optionValue);
    }

    const getCapitalObject = () => {
        return countryAndCapitalsList.find(eachItem => selectedId === eachItem.id);
    }

    const capitalCity = getCapitalObject();

    return (
        <div className="capitals-bg-container">
            <div className="capitals-card">
                <h1 className="capitals-main-heading">Countries and Capitals</h1>
                <div className="mt-3">
                    <select className="capitals-select-element" onChange={changeCapital}>
                        {countryAndCapitalsList.map(eachItem => (
                            <OptionsCapitals key={eachItem.id} eachCapital={eachItem} />
                        ))}
                    </select>
                    <span className="capitals-question-text">is capital of which country?</span>
                </div>
                <h2 className="capitals-country-name">{capitalCity.country}</h2>
            </div>
        </div>
    );
}

export default CapitalsApp;



