# react_source

* git remote add origin https://github.com/duqqnls/react_source.git
* git remote -v 

/*
제대로 연결되었으면 아래와 같이 뜬다.
origin  https://github.com/suasue/hello.git (fetch)
origin  https://github.com/suasue/hello.git (push) 
참고로 git branch -M main 명령어는 Master branch 이름을 Main으로 바꾸는 명령어인데, 첫 번째 commit을 해야 할 수 있다. 이따 다시 할 것
*/

-- commit/push --
git status로 현재 상태를 확인해보자

* git status

********************** git pull origin main 제발 !!! ************************

git add 명령어로 test.py 파일을 staging area로 옮겨 git이 그 파일을 트랙킹할 수 있도록 한다.
add 뒤에 .을 입력하면 현재 디렉토리의 모든 파일을 add한다.

* git add .
* git commit -m "[메세지 작성]" 

Master -> Main 이름 변경

* git branch -M main 
* git push -u origin main
