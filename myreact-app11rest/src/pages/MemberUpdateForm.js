import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm() {
    // App.js "/members/:num/edit" num 값 읽기
    const {num} = useParams(); // 1. useParams() : 파라미터 값(num)을 읽어온다.
    // 2. 수정할 정보 state로 관리 (가져가야할 값 3개)
    const [state, setState] = useState({
        num:0,
        name:"",
        addr:""
    }); 

    useEffect (() => {
        // Ajax 요청 (get 방식) : 수정 자료 읽기 
        axios.get("/members/" + num)
        .then(res => {
            // 서버로부터 응답된 데이터를 이용해서 state를 수정 
            // 참고로 res.data는 {num:1, name:'송여빈', addr:시흥시} 이런식으로 생김 
            setState(res.data) // 수정자료 보기 
        })
        .catch(error => {
            console.log(error);
        })
    }, [num])
 
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    
    const navigate = useNavigate();

    // 수정 버튼 클릭에 대한 이벤트 핸들러 
    const handleSave = () => {
        // Ajax 요청(PUT 방식) 설정
        axios.put("/members/" + num, state)
        .then(res => {
                navigate("/members") // 수정 후 목록보기
        })
        .catch(error => {
            console.log(error);
        })
    }

    return(
        <>
            <h2>회원 정보 수정</h2>
            <div>
                <label>이름 :</label>
                <input type="text" name="name" onChange={handleChange} />
            </div>
            <div>
                <label>주소 :</label>
                <input type="text" name="addr" onChange={handleChange} />
            </div>
            <button onClick={handleSave}>수정 확인</button>
        </>
    )
}