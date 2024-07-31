import React, {useState, useEffect} from "react";

const MyAjax = () => {
    // Ajax 요청을 위해 Eclipse에서 작성한 abc.jsp로부터 fetch 요청
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); // 로딩중
    const [items, setItems] = useState([]); // 배열 

    // fetch를 이용해 jsp 자료(Apach Server) 읽기 
    // Ajax 처리 성공하면 isLoaded items를 갱신 => isLoaded=true, items=값 출력 !

    // 기본 : SOP (Same Origin Policy, 동일 출처 정책) 
    // 다른 출처의 리소스가 필요하다면 CORS(Cross Origin Resource Sharing, 교차)
    // A Server <-> B Server는 CORS 에러가 나지 않는다. 
    // CORS 처리는 package.json에 등록해주면 된다.  "proxy":"http://localhost:80" 

    useEffect(() => {
        fetch("/web_react/abc.jsp", {method:'GET'}) // 1. 요청이 들어간다. 
        .then(res => {
            if(!res.ok){
                throw new Error('Network response not ok')
            }
            return res.json();
        })
        .then(
            (result) => {
                setIsLoaded(true);
                setItems(result.items); // result.items는 7라인의 items가 아닌, abc.jsp파일의 items(배열)이다.
            },
            (error) => {
                setIsLoaded(true);
                setError(error); 
            }
        ) 
    }, []);

    // error가 발생하면, 에러 메세지를, isLoaded가 false이면 로딩 메세지를 
    // 그 외에는 items를 출력(렌더링)한다.
    if(error) {
        return <div>에러 : {error.message}</div>
    } else if(!isLoaded) {
        return <div>자료 수신 중</div>
    } else {
        return (
            <ul>
                {items.map(item => (
                    <li>
                        {item.code}  {item.name}  {item.price} 
                    </li>
                ))}
            </ul>
        );
    }
}

export default MyAjax;
