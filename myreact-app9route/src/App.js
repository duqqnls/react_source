import React from "react";
import Test from "./exam/Test"
import About from "./exam/About"
import {BrowserRouter as Router ,Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>라우트 연습용 메인 화면</h2>
        <Test />

        <hr />
        {/* 메뉴 작성 : 라우팅 연습 -- 1 */}
        <nav>
          {/* Link 는 a tag로 전환 : 요청명 개념으로 이해 -- 3*/}
          <Link to="/">Test화면</Link> |
          <Link to="/About">About보기</Link> |  
        </nav>
        
        <Routes>  {/* 컴포넌트에서 동적 라우팅 구현 가능 -- 2 */ }
          <Route path="/" element={<Test/>}></Route>
          <Route path="/About" element={<About/>}></Route>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
