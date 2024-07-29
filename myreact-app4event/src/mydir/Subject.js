import React, {Component} from "react";

class subject extends Component {
    render() {
        const clickHandler = () => {
            console.log('두 번째 버튼 클릭 성공')
        }

        const keyUpHandler = (e) => {               // 텍스트 박스의 keyUp이벤트 핸들러 
            console.log('텍스트 키업 이벤트 성공');   // event가 발생했을 때 정보를 가지고있는게 e
            console.log('입력한 값: ', e.target.value);

        }

        return (
            <header>                                    
                <h1>머리글 : {this.props.title}</h1>
                {this.props.subtitle}
                button 이벤트 : 
                <br />
                <button onClick={               // 버튼을 클릭하면 
                    function() {                // 함수를 실행한다.
                        this.props.ChangePage() // 부모로 부터
                }.bind(this)}>{this.props.subtitle}</button>
            
            <br />
            <button onClick={clickHandler}>두 번째 버튼</button>
            
            <br />
            <input type="text" onKeyUp={keyUpHandler} />
            </header>
        );
    }
}

export default subject;
