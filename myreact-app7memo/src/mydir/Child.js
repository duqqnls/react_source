import React, {memo} from "react";

const boxstyle = {border:'2px solid pink', padding:'20px' }

// function Child({irum, nai}) {...}  
const Child = ({irum, nai}) => {
    console.log('와우, 자녀 나이 변경 - 렌더링')

    return (
        <div style={boxstyle}>
            <h3>👶자녀 1👶</h3>
            <p>이름 : 코코</p>
            <p>나이 : 13</p>
            <h3>👶자녀 2👶</h3>
            <p>이름 : {irum}</p> {/* props. 부모로부터 넘겨받은 값 사용 예정*/}
            <p>나이 : {nai}</p>

        </div>
    );
}

// export default Child;
export default memo(Child); // 반환 컴포넌트를 memo함수로 감싸주면 memo 기능이 활성화