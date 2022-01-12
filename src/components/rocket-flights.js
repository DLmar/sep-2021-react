import React, {useEffect, useState} from 'react';

const RocketFlights = () => {
    const [rocketFlights, setRocketFlights]= useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights => {
                setRocketFlights(flights.filter(flight => flight.launch_year !== '2020'))
            })


    },[])
    return (
        <div>
            {rocketFlights.map(value => <div key={value.flight_number}>
                {value.mission_name} - {value.launch_year}
                <img src={value.links.mission_patch} alt="mission_patch"/>
            </div>)
            }
        </div>
    );
};

export default RocketFlights;