import React, {useState} from "react";

const Input2 = () => {
    const [params, setParams] = useState({
        irum:'',
        nai:'',
        juso:''
    });

    const {irum, nai, juso} = params;

    const changeFunc = (e) => {
        const value = e.target.value;
        const id = e.target.id;

        setParams({             //  수정을 위해서 setParams 
            ...params,
            [id]:value
        }) 
    }


    return (
        <div>
            <br/>
            <div>
                <label for="irum">이름 :</label>
                <input type="text" value={irum} id="irum" onChange={changeFunc} />
            </div>
            <div>
                <label for="nai">나이 :</label>
                <input type="text" value={nai} id="nai" onChange={changeFunc} />
            </div>
            <div>
                <label for="juso">주소 :</label>
                <input type="text" value={juso} id="juso" onChange={changeFunc} />
            </div>
            <br/>
            <h3>처리 결과</h3>
            <table border={1}>
                <tr>
                    <td>이름은 {irum}</td>
                    <td>나이는 {nai}</td>
                    <td>주소는 {juso}</td>
                </tr>
            </table>

        </div>
    );
};
export default Input2;

