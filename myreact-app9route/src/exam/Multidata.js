import React from "react";

// Member Component 
const Member = ({memberData}) => {    // memberData <- props
    return(
        <tr>
            <td>{memberData.irum}</td>  {/* 3. 값 받기*/}
            <td>{memberData.junhwa}</td>                   
        </tr>
    );
}

// 메인 컴포넌트 
const Multidata = () => {
    const members = [
        {irum:'여빈', junhwa:'111-1111'}, // 1. 변수 mem을 타고 배열값이 한 개씩 나온다. 
        {irum:'소희', junhwa:'222-2222'},
        {irum:'원빈', junhwa:'333-3333'},
    ];

    return(
        <table border={1}>
            <thead>
                <tr>
                    <th>이름</th><th>전화</th>
                </tr>
            </thead>
            <tbody>
                
                {members.map((mem, index) => (     // 2. 값 전달 
                    // 배열 렌더링시 각 요소에 고유 key를 추가해야함 
                    <Member key={index} memberData={mem}/>
                ))}
            </tbody>
        </table>
    );
}

export default Multidata;
