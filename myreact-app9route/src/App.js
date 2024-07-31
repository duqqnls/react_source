import React from "react";
import {BrowserRouter as Router ,Routes, Route, Link } from "react-router-dom";

import Test from "./exam/Test"
import About from "./exam/About"
import Counter from "./exam/Counter";
import Input1 from "./exam/Input1";
import Input2 from "./exam/Input2";
import Multidata from "./exam/Multidata";
import MyAjax from "./exam/MyAjax";

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
          <Link to="/Counter">Count보기</Link> |
          <Link to="/Input1">Input1보기</Link> |
          <Link to="/Input2">Input2보기</Link> |     
          <Link to="/Multidata">Multidata보기</Link> |    
          <Link to="/MyAjax">MyAjax보기</Link>
        </nav>
        
        <Routes>  {/* 컴포넌트에서 동적 라우팅 구현 가능 -- 2 */ }
          <Route path="/" element={<Test/>}></Route>          {/* Route는 두 가지 요소를 가지고 있음 1)path 2)element */}
          <Route path="/About" element={<About/>}></Route>    {/* path는 경로, element는 수행될 문서*/}
          <Route path="/Counter" element={<Counter/>}></Route>
          <Route path="/Input1" element={<Input1/>}></Route>
          <Route path="/Input2" element={<Input2/>}></Route>
          <Route path="/Multidata" element={<Multidata/>}></Route>
          <Route path="/MyAjax" element={<MyAjax/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
