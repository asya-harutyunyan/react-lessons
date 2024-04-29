//1

// import React from "react";
// import ChildComponent from "../ChildComponent/ChildComponent";

// const ParentComponent = () => {
//   const greeting = "Hello from Parent";
//   return <ChildComponent message={greeting} />;
// };

// export default ParentComponent;

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//2
// import React from "react";
// import ChildComponent from "../ChildComponent/ChildComponent";

// const ParentComponent = () => {
//   return (
//     <div>
//       <ChildComponent name={"John"} age={20} />
//       <ChildComponent name={"Smith"} age={24} />
//     </div>
//   );
// };

// export default ParentComponent;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3
// import React from "react";
// import Button from "../ChildComponent/ChildComponent";

// const ParentComponent = () => {
//   const handleClick = () => {
//     alert("Button clicked");
//   };

//   return (
//     <Button onClick={handleClick}/>
//   )
// };

// export default ParentComponent;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//4
// import React from "react";
// import ChildComponent from "../ChildComponent/ChildComponent";

// const ParentComponent = () => {
//   const showGreeting = true;
//   return (
//     <ChildComponent showGreeting={showGreeting}/>
//   )
// };

// export default ParentComponent;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//5
// import React from "react";
// import ChildComponent from "../ChildComponent/ChildComponent";

// const ParentComponent = () => {
//   const user = {
//     name: "ALice",
//     age: 30,
//   };
//   return <ChildComponent x={user} />;
// };

// export default ParentComponent;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//6

// import React, { useState } from "react";
// import ChildComponent from "../ChildComponent/ChildComponent";

// const ParentComponent = () => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count:{count}</p>
//       <ChildComponent x={increment} />
//     </div>
//   );
// };

// export default ParentComponent;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//7
// import React from "react";
// import Car from "../ChildComponent/ChildComponent";

// const ParentComponent = () => {
//   return (
//     <div>
//       <h1>Who lives in my garage?</h1>
//       <Car brand="Ford" />
//     </div>
//   );
// };

// export default ParentComponent;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//8
// import React from "react";
// import Car from "../ChildComponent/ChildComponent";

// const ParentComponent = () => {
//   const carInfo = { name: "Ford", model: "Mustang" };
//   return (
//     <>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={carInfo} />
//     </>
//   );
// };

// export default ParentComponent;

//////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
  },
];
const ParentComponent = () => {
  const listItems = people.map((person) => (
    <li key={person.id}>{person.name}</li>
  ));
  return <ul>{listItems}</ul>;
};

export default ParentComponent;
