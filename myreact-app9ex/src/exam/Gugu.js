import React, { useState } from "react";

const Gugu = () => {
  const [text, setText] = useState(1);
  const arr = [];

  for (let i = 0; i < 9; i++) {
    arr[i] = i + 1;
  }

  const inputFunc = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      단 입력 : <input type="text" value={text} onChange={inputFunc}></input>
      <table>
        {arr.map((s) => ( // .map() : 원본 배열을 바탕으로 새로운 배열을 생성하기 위한 도구 
          <tr>
            <td>{text} </td>
            <td> × </td>
            <td>{s}</td>
            <td> =</td>
            <td>{text * s}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Gugu;
