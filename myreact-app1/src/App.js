import React, { Component } from 'react'; // 컴포넌트를 상속받기 때문에, 무조건 임포트
import './App.css';
import Navdata from './mydir/Navdata';

// 클래스 컴포넌트. 조립식 프로그래밍 가능
class Subject extends Component {
  render() {      // 클래스는 반드시 render를 가진다.  
    return(       // 반드시 return 해준다.  
      <header>    {/* HTML 같지만, JSX이다. */}
          <h1>머리글 : 웹 문서</h1>
      </header>
    );
  }
}

// 함수 컴포넌트
function Welcome(props) {
  return(
    <article>
      {props.who} 글 기사 내용 
    </article>
  );
}

function App() { // 부모 컨테이너
  return (
    <div>
      연습용
      <Subject></Subject> {/* 컴포넌트 호출 */}
      <br/>
      <Welcome></Welcome>
      <br/>
      <Welcome who='송여빈'></Welcome>
      <br/>
      <Navdata msg="출발"></Navdata>
    </div>
  );
}

export default App;
