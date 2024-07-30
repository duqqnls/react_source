import { useState } from "react";

function MyForm() {
    const [formData, setFormData] = useState({
        irum : '',
        nai: '',
        menu: '당근'
    })
    
    const dataChange = (e) => {
        const name = e.target.name; // form 태그 내의 name
        const value = e.target.value;
        setFormData({
            ...formData,
            [name]:value
        });
    }

    const dataSubmit = (e) => {
        e.preventDefault(); // 해지
        const {nai} = formData; // formData 객체에서 nai를 추출해 nai변수에 치환

        if(Number(nai) || isNaN(Number(nai))){  // 나이 입력 자료
            alert('나이는 숫자로 입력하시오');
        }else {
            alert('처리 성공');
        }
    }

    return (
        <>
            <h3>결과 : {formData.irum}, 넌 {formData.nai}살!, 선택한 음식은 {formData.menu}</h3>
            <form onSubmit={dataSubmit}> 
                이름 입력 : <input type="text" name="irum" onChange={dataChange} /><br />
                나이 입력 : <input type="text" name="nai" onChange={dataChange} /><br />
                야식 입력 : 
                <select name="menu" value={formData.menu} onChange={dataChange}>
                    <option value="오이">오이</option>
                    <option value="애호박">애호박</option>
                    <option value="팽이버섯">팽이버섯</option>
                </select>
                <br /><br />
                <button type="submit">전송</button>
            </form>
        </>
    )
}

export default MyForm;
