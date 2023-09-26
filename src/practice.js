import React, { useState ,useEffect } from 'react';

// function Counter() {
  
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

 
//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
    
//     <div>
//       <h1>Counter App</h1>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;
// function NameChangeApp() {
//     const [name, setName] = useState('');
  
//     const handleNameChange = (event) => {
//       setName(event.target.value);
//     };
  
//     return (
//       <div>
//         <h1>Hello, {name }!</h1>
//         <input
//           type="text"
//           value={name}
//           onChange={handleNameChange}
//           placeholder="Enter your name"
//         />
//       </div>
//     );
//   }
  
//   export default NameChangeApp;

// function NameChangeApp() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [timeOfDay, setTimeOfDay] = useState('');

//   const handleFirstName = (event) => {
//     setFirstName(event.target.value);
//   };
//   const handleLastName = (event) => {
//     setLastName(event.target.value);
//   };

//   useEffect(() => {
//     const currentTime = new Date().getHours();

//     if (currentTime >= 5 && currentTime < 12) {
//       setTimeOfDay('Morning');
//     } else if (currentTime >= 12 && currentTime < 18) {
//       setTimeOfDay('Afternoon');
//     } else {
//       setTimeOfDay('Evening');
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Good {timeOfDay}, {firstName||'' }{lastName||''}!</h1>
//       <input
//         type="text"
//         value={firstName}
//         onChange={handleFirstName}
//         placeholder="Enter your first name"
//       />
//       <input
//         type="text"
//         value={lastName}
//         onChange={handleLastName}
//         placeholder="Enter your last name"
//       />
//     </div>
//   );
// }

// export default NameChangeApp;