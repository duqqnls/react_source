import React, {Component} from "react";

class Clock1 extends Component{
    /*
    constructor(props){
        super(props);
    };
    */
   
    render() {
        return(
            <div>
                <h1>안녕 ~</h1>
                <h2>지금은 {new Date().toLocaleTimeString()}</h2> {/* 현지 표준 시간대 날짜의 시간을 문자열로 반환 */}
            </div>
        );
    }
}
export default Clock1;
