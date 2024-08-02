import { Route, Routes } from 'react-router-dom';
import './css/custom.css';
import Home from './pages/Home';
import Member from "./pages/Member";
import MemberForm from "./pages/MemberForm";
import MemberUpdateForm from "./pages/MemberUpdateForm";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Member />} />
        <Route path="/members/new" element={<MemberForm />} />
        
        {/* 수정버튼 - /members/${item.num}/edit 를 리액트로 바꾼다면 */}
        <Route path="/members/:num/edit" element={<MemberUpdateForm />} />
      </Routes> 
    </div>
  );
}

export default App;
