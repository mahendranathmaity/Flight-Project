import { Button } from "react-bootstrap";
// import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AllFlights from "../constant/flight";

import React, { useContext, useEffect, useState } from 'react'
import { FlightContext } from '../context/FlightContext';

const Home = () => {
  const { setSelectedId } = useContext(FlightContext);

  function goToSearchFlight(flightId) {
    setSelectedId(flightId)
    goTo("/searchflight-page");
  }

  const [filter, setFilter] = useState({ startPlace: '', endPlace: '' });
  const [filteredData, setFilteredData] = useState(AllFlights);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleFilter = () => {
    const filtered = AllFlights.filter((row) => {
      return (
        (filter.startPlace === '' || row.startPlace.toLowerCase().includes(filter.startPlace.toLowerCase()) && filter.endPlace === '' || row.endPlace.toLowerCase().includes(filter.endPlace.toLowerCase()))
      );

    });
    setFilteredData(filtered);
    // goTo("/flightlist-page")
  };
  const navigate = useNavigate();
  function goToFlightAllHistory() {
    goTo("/flightallhistory-page");
  }


  function goTo(path) {
    navigate(path);
  }
  return (
    <div>
      <h1><u><i>Booking-Flight</i></u></h1>
      <div>
        <input
          type="text"
          name="startPlace"
          placeholder="Enter Your From Flight"
          value={filter.startPlace}
          onChange={handleChange}
        />
        <input
          type="text"
          name="endPlace"
          placeholder="Enter Your To Flight"
          value={filter.endPlace}
          onChange={handleChange}
        />
        <Button onClick={handleFilter}>Search Flight</Button>
        Or
        <Button onClick={goToFlightAllHistory}>FlightHistory</Button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Flight Name</th>
            <th scope="col">Deparature Time</th>
            <th scope="col">Arrive End</th>
            <th scope="col">Bording At</th>
            <th scope="col">Destination</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row) => (
            <tr key={row.startPlace}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.startTime}</td>
              <td>{row.endTime}</td>
              <td>{row.startPlace}</td>
              <td>{row.endPlace}</td>
              <td>{row.price}</td>
              <Button className="btn btn-primary" onClick={() => { goToSearchFlight(row.id) }}>Book Now</Button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

};

export default Home;





