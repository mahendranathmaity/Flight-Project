import React from 'react'
import { useContext } from "react";
import { Button, Container } from "react-bootstrap"
import { FlightContext } from "../context/FlightContext";
import { useNavigate } from 'react-router-dom';
const FlightAllHistory = () => {
  const { mybooking, } = useContext(FlightContext);
  const navigate = useNavigate()
  function goToHome() {
    goTo("/home-page")
  }
  function goTo(path) {
    navigate(path)
  }
  return (

    <Container>
      <div className="header">
        <h1>FlightHistory-page</h1>
      </div>
<table className="table">
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
      {mybooking.map((booking,id)=>{
        return <tr key={id}>
            <td>{booking.id}</td>
              <td>{booking.name}</td>
              <td>{booking.startTime}</td>
              <td>{booking.endTime}</td>
              <td>{booking.startPlace}</td>
              <td>{booking.endPlace}</td>
              <td>{booking.price}</td>

        </tr>
      })}
      </thead>
      </table>
      <Button variant="primary" onClick={goToHome}>Back-SearchFlight</Button>
</Container>
  )
}
export default FlightAllHistory





// import React, { useState } from 'react';

// const FlightHistory = () => {
//   // Sample flight history state
//   const [flightHistory, setFlightHistory] = useState([
//     { id: 1, flight: 'Flight A' },
//     { id: 2, flight: 'Flight B' },
//     { id: 3, flight: 'Flight C' },
//   ]);

//   // Function to delete a flight from the history
//   const deleteFlight = (id) => {
//     setFlightHistory(flightHistory.filter(flight => flight.id !== id));
//   };

//   return (
//     <div>
//       <h2>Flight History</h2>
//       <ul>
//         {flightHistory.map(flight => (
//           <li key={flight.id}>
//             {flight.flight} 
//             <button onClick={() => deleteFlight(flight.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FlightHistory;



























// const [selectedDestination, setSelectedDestination] = useState("");
//   const [selectedDestinationError, setSelectedDestinationError] = useState(" ")
  
// // const handleSelectChange = (e) => {
//   //   setSelectedDestination(e.target.value);
//   // };
//   const submitHandler = () => {
//     let isValid = true;
//     if (!selectedDestination) {
//       isValid = false
//       setSelectedDestinationError("Enter User selectedDestination")
//     }
//   }

//   return (
//     <div>
//       <div className="form-group">
//         <Form.Select onChange={(event) => {
//           setSelectedDestination(event.target.value)
//           setSelectedDestinationError("")
//         }}
//           value={selectedDestination}>
//           <option>Flight Destination</option>
//           <option value="mango">Goya</option>
//           <option value="banana">Bomby</option>
//           <option value="cherry">Dilhi</option>
//           <option value="grapes">Dum Dum</option>
//           <option value="apple">Agra</option>
//           <div className="selectedDestination-error">{selectedDestinationError}</div>
//           <Form.Group>
//             <Form.Label>Small select</Form.Label>
//             <Form.Select size="sm">
//               <option>Small select</option>
//               <option>Small select</option>
//               <option>Small select</option>
//             </Form.Select>
//           </Form.Group>
//         </Form.Select>
//         <Button variant="primary" onClick={submitHandler}>SearchFlight</Button>

//       </div>
//     </div>