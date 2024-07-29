import React from "react";

function Func(props) {
    let lists = [];
    let datas = props.friends;
    let i = 0;

    while(i < datas.length){
        lists.push(<h5>{datas[i].bun} : {datas[i].irum}의 나이는 {datas[i].nai}</h5>);
        i += 1;
    }

    return (
        <div>
            글 기사 : {props.subtitle}
            <br/>
            {lists}            
            <br/>

            a tag로 이벤트 발생 :
            <a href="/" onClick={
                (e) => {
                    e.preventDefault(); // a태그의 기능을 죽이고
                    props.ChangePage(); // changePage 기능을 실행              
                }
            }>이벤트 발생</a>
        </div> 
    );    
}

export default Func;
