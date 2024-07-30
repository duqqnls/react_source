import React, { useState } from "react";
import UnitConv from "./mydir/UnitConv";
import './App.css'; // CSS 파일 추가

function App() {
  const [meterNumber, setMeterNumber] = useState(1);
  const [centeNumber, setCenteNumber] = useState(meterNumber * 100);
      
  const ChangemeterNumber = () => {
    setMeterNumber(meterNumber + 1);
    setCenteNumber((meterNumber + 1) * 100); // 센티미터 값도 업데이트
  };

  const ChangecenteNumber = () => {
    setCenteNumber(meterNumber * 100);
  };

  console.log('변경되었습니다. - 렌더링');

  return (
    <div className="container">
      <h2>단위 환산 계산기</h2>
      <div className="input-group">
        <label htmlFor="meter">미터:</label>
        <input
          type="number"
          id="meter"
          value={meterNumber}
          onChange={(e) => setMeterNumber(Number(e.target.value))}
          className="input-field"
        />
        <button onClick={ChangemeterNumber} className="convert-button">미터 변환</button>
      </div>
      <UnitConv centeNumber={centeNumber} ChangecenteNumber={ChangecenteNumber} />
    </div>
  );
}

export default App;
