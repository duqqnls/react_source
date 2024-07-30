import React, {useState} from "react";
import Child from "../src/mydir/Child";

function App() {
  // App 컴포넌트가 호출될 때, 함수 내의 내용을 차례대로 수행(렌더링)
  // 리액트는 부모 컴포넌트가 렌더링될 때 자식 컴포넌트 또한 렌더링 된다.
  // 성능 최적화를 목적으로 컴포넌트에서 필요한 상황에서만 자식 컴포넌트가
  // 리렌더링에 참여할 수 있도록 React.memo 함수를 제공한다.
  const [fatherAge, setFatherAge] = useState(34) // 함수의 멤버 fatherAge
  const [childAge, setChildAge] = useState(12) 

  const changefatherAge = () =>  {   // 아빠 나이 변경 이벤트 핸들러
    setFatherAge(fatherAge + 1);  
  }

  const changechildAge = () =>  {    // 자식 나이 변경 이벤트 핸들러
    setChildAge(childAge + 1);  
  }

  console.log('아빠 나이가 변경되었습니다. - 렌더링');
  
  const boxstyle = {border:'2px solid', padding:'10px' }
  return (
    <div style={boxstyle}>
      <h2>👵 아빠 👵</h2>
      <span> 나이 : {fatherAge}</span>&nbsp;&nbsp;
      <button onClick={changefatherAge}>아빠 나이 변경</button>
      <hr/>
      <Child irum={'땅콩'} nai={childAge} />
      <button onClick={changechildAge}>자녀 나이 변경</button>
    </div>
  );
}

export default App;
