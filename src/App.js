//create a job functional component having the following variables, like salary, position and company.

import React from 'react'
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div>
     <Job salary  = {15000} position = "Teaching Assitant" company = "MU" /> 
     <Job salary  = {15000} position = "Teaching Assitant" company = "MU" />
     <Job salary  = {15000} position = "Teaching Assitant" company = "MU" />
  </div>
  );
  
}

const Job = (props) => {
   return <h2>{props.salary} {props.position} {props.company}</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;