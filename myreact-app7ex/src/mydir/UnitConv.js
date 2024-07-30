import React, { memo } from "react";
import './UnitConv.css'; // CSS 파일 추가

const UnitConv = ({ centeNumber, ChangecenteNumber }) => {
  console.log('센티미터 변환 성공 - 렌더링');

  return (
    <div className="cente-container">
      <h3>단위 환산 계산기 - 센티미터</h3>
      <div className="output-group">
        <span>센티미터: {centeNumber}</span>
        <button onClick={ChangecenteNumber} className="convert-button">센티미터 변환</button>
      </div>
    </div>
  );
}

export default memo(UnitConv);
