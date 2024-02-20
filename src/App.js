// import "./App.css";
// import React,{useState} from "react";

// function App() {
// //state make
// const [weight,setWeight] = useState(0);
// const [height,setHeight] = useState(0);
// const [bmi,setbmi] = useState("");
// const [message,setMessage] = useState("");

// //logic
// let calBmi = (e) => {


//   e.preventDefault();
//   if(weight===0 || height===0){
//    alert("Please Enter a valid Weight and Height");
//   }
//   else{
//     let bmiValue = (weight/(height*height)*703)
//     setbmi(bmiValue.toFixed(1))

//     if(bmi<18.5){
//       setMessage("You are UnderWeight");
//     }else if(bmi>=18.5 && bmi<25){
//       setMessage("You are health Weight");
//     }
//     else{
//       setMessage("You are UnderWeight");
//     }
    
//   }
// }

// //reloead logic

// const reload = () => {
//   window.location.reload();
// };






//   return (
//     <div className="App">
//       <div className="container">
//         <h2>BMI CALCULTOR</h2>

//         <form onSubmit={calBmi}>
//           <div>
//             <label>Weight(lbs) : </label>
//             <input type="text" placeholder="Enter Weight Value : " 
//             value={weight}
//             onChange= {(e) => setWeight(e.target.value)}
            
//             />
//           </div>
//           {/* form height */}
//           <div>
//             <label>Height(in) : </label>
//             <input type="text" placeholder="Enter Height Value : " 
//             value={height}
//             onChange={(e) => setHeight(e.target.value)}
//             />
//           </div>
//           <div>
//             <button className="btn" type="submit">
//               Submit
//             </button>
//             <button className="btn btn-outline" onClick={reload} type="submit">
//               Reload
//             </button>
//           </div>

//           <div className="centre">
//             <h3>Youre BMI is : {bmi}</h3>
//             <h4>{message}</h4>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React, { useState } from "react";

function App() {
  // State setup
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // BMI calculation logic
  const calBmi = (e) => {
    e.preventDefault(); // Changed to e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Enter a valid Weight and Height");
    } else {
      const bmiValue = (weight / (height * height)) * 703;
      setBmi(bmiValue.toFixed(1));

      if (bmiValue < 18.5) {
        setMessage("You are Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setMessage("You are at a Healthy Weight");
      } else {
        setMessage("You are Overweight");
      }
    }
  };

  // Reload logic
  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>BMI CALCULATOR</h2>

        <form onSubmit={calBmi}>
          <div>
            <label>Weight(lbs) : </label>
            <input
              type="text"
              placeholder="Enter Weight Value : "
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          {/* form height */}
          <div>
            <label>Height(in) : </label>
            <input
              type="text"
              placeholder="Enter Height Value : "
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>

          <div className="centre">
            <h3>Your BMI is : {bmi}</h3>
            <h4>{message}</h4>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

