import React, {Component} from "react";

/* 
class MyName extends Component{                             
    // static defaultProps = { // props에 기본 값 부여          // 방법 1 : 값 부여 (static) 
    //     name: 'duqqnls'
    // }

    render() {
        return (
            <div>
                안녕~ 내 이름은 <b>{this.props.name}</b>
            </div>
        );
    }
}

MyName.defaultProps = {                                       // 방법 2 : 값 부여 (static) 
    name: 'duqqnls'
}

export default MyName;
*/ 

// 함수로 소스 코드 변환 1 
function MyName(props) {
    return (
        <div>
            안녕~ 내 이름은 <b>{props.name}</b>
        </div>
    )
}
export default MyName;

// 클래스를 함수로 소스 코드 변환 2 
/*
const MyName = ({name}) => {
    return (
        <div>
            안녕~ 내 이름은 <b>{props.name}</b>
        </div>
    ) 
}
export default MyName;
*/ 


// 함수로 소스 코드 변환 3
/*
function MyName(kbs) {  // 부모로부터 props를 부여받는 것 : 전달받는 매개변수를 리액트에서 props라고 한다.
    return (
        <div>
            안녕~ 내 이름은 <b>{kbs.name}</b>
        </div>
    )
}
export default MyName;
*/
