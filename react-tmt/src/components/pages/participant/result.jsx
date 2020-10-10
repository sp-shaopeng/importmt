import React, {useState, useEffect, useContext} from "react";
import AuthContext from "../../../context/authContext";
// import {JSONReply} from "./data";

const User = () => {
  const [results, setResults] = useState([]);
  const authContext = useContext(AuthContext);
  const { 
    error, 
    isAuthenticated,
    user,
    token, 
    stopLoading
    } = authContext;


  useEffect(()=>{
    if(isAuthenticated){
      fetch(async () =>{
        const res = await fetch("https://cz3002-server.herokuapp.com/userattempts/" + user,
        {
          method: "GET",
          headers: new Headers(token)
        });
        const data = await res.json();
        setResults(data);
      })
    } else{
      stopLoading();
    }
  },[error, isAuthenticated]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Time</th>
          <th scope="col">Error</th>
          <th scope="col">Difficulty</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {results.map((item, index) => {
          
          var difficulty = null;
          var timestamp = new Date(item.attempted_on);
          var errors = 25 - item.accuracy;
          var date= null;
          var time =null;

          if (item.difficulty){
            difficulty = 1;
          } else{
            difficulty = 2;
          }
          alert(timestamp)
          date = String(timestamp.getDate()) + "/" + String(timestamp.getMonth()) + "/" + String(timestamp.getFullYear());
          time = String(timestamp.getHours()) + ":" + String(timestamp.getMinutes());
          return(
            <tr>
              <th scope="row">{date}</th>
              <td>{time}</td>
              <td>{errors}</td>
              <td>{difficulty}</td>
              <td>{String(item.pass_fail)}</td>
            </tr>

          )
        })}
      </tbody>
    </table>
  );
}

export default User;