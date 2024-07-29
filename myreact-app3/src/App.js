import './App.css';
import MyName from './mydir/MyName';

function App() {
  return (
    <div className="App">
      duqqnls<br />
      컴포넌트에서 사용하는 데이터는 props와 state 두개가 있다.<br />
      props : 부모 컴포넌트가 자식 컴포넌트에 주는 값 = 일방향<br />
      state : 컴포넌트 내부에서 선언하며 내부에서 값 변경 가능 = 양방향<br />
      props나 state 값이 변경되면, 컴포넌트는 re-렌더링된다.<br />
      <hr></hr>
      <MyName />
      <br />
      <MyName name="송여빈" /* name 이라는 props 값 전달 */ /> 
    </div>
  );
}

export default App;
