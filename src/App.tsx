import React, { useState } from "react";
import "./App.css";
import ReservationCard from "./app/components/ReservationCard";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import {addReservation} from "./app/features/reservationSlice";
import CustomerCard from "./app/components/CustomerCard";

function App() {
   const [reservationName, setreservationName] = useState("");
  const dispatch = useDispatch();
  const reservations = useSelector(
    (state: RootState) => state.reservations.value
  );
  const customers = useSelector(
    (state: RootState) => state.customer.value
  );
  const handleAddReservation=()=>{
      if(reservationName){
        dispatch(addReservation(reservationName))
        setreservationName("");

      }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                  return( 
                  <ReservationCard name={name} index={index} key={index} />
                  );
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationName} 
           onChange={(e)=>setreservationName(e.target.value)}
            />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {
            customers.map(customer=>{
              return(
                <CustomerCard name={customer.name} id={customer.id} food={customer.food}/>

              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
