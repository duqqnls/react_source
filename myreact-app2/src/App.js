//import React, { Component, useState } from "react";
// import HookTest from "./mydir/Hooktest";
// import HookTest2 from "./mydir/Hooktest2";

// class App extends Component { ... render() { ... return(JSX)}}

// function App() {... return(JSX)}

// const App = () => { render() {}}

// class App extends Component {
//   state = {
//     count:0
//   };

//   countUpdate(n) {
//     this.setState({count:n});
//   }

//   render() {
//     const {count} = this.state;  // const 나 let으로 변수 설정
//     return(
//       <div>
//         <h3>class 컴포넌트 사용</h3>
//         number : {count} &nbsp;
//         <button onClick={() => {
//           this.countUpdate(count + 1);
//         }}>증가 1</button>
//         <hr/>
//         <h3>function 컴포넌트 사용</h3>
//         <HookTest />
//         <hr/>
//         <h3>function 컴포넌트 사용 2</h3>
//         <HookTest2 />
//       </div>
//     );
//   }
// }
import React, { useState } from "react";
import HookTest from "./mydir/HookTest";
import HookTest2 from "./mydir/HookTest2";

const App = () => {
  const [count, setCount] = useState(0);

  const countUpdate = (n) => {
    setCount(n);
  };

  return (
    <div>
      number : {count}&nbsp;
      <button onClick={() => countUpdate(count + 1)}>증가 1</button>
      <hr />
      <HookTest />
      <hr />
      <HookTest2 />
    </div>
  );
};


export default App;
