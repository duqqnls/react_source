import React, {useState} from "react"; // Hook 사용 : {use ...}
import Subject from "./mydir/Subject";
import Welcome from "./mydir/Func";


// const App = () => {
function App() {
  const [subject, setSubject] = useState({title:'웹문서', subtitle:'리액트 만세'}); // let도 사용 가능 
  const [friends] = useState([
    {bun:1, irum:'여빈', nai:24},
    {bun:2, irum:'소희', nai:22}
  ]);

  const handelChangePage = () => {
    // friends 배열 값 콘솔에 출력 
    friends.forEach(friend => {   // 변수명 : friend
      console.log(`${friend.bun}번 ${friend.irum}님 나이는 ${friend.nai}살`)
    }); 

    setSubject(prevSubject => ({    // 이전 상태인 prevSubject(subject)을 받아 변환
      ...prevSubject,               // ...전개연산 
      title: '버튼에 의해 제목 변경'
    }));  
  }


  return (
    <div className="App">
      이벤트 연습<br />
      <Subject 
        title = {subject.title}
        subtitle = {subject.subtitle}
        ChangePage = {handelChangePage}
      />
      {/* title, subtitle, ChangePage : App에서 Subject 컴포넌트로 전달되는 props */}
      <br />
    
      <Welcome
      subtitle = {subject.subtitle}
      friends = {friends}
      ChangePage = {handelChangePage}
      />

    </div>
  );
}

export default App;
