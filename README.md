### **`okky`** 를 모티브로 진행한 프로젝트입니다.
👉[okky](https://okky.kr/)

---
<br>

## **프로젝트 소개**
```
개발자 지식공유 플랫폼으로 개발자에게 필요한 기술,아티클, 커리어, 네트워킹, 취업, IT행사를 지원하고 참여할 수 있습니다.
```

<br>


### **개발 인원 및 기간**
​
- 개발기간 : 2022/9/19 ~ 2022/9/30
- 개발 인원 : 6명
- 프론트 엔드 : 이혜림, 유상호, 박기호, 천찬영
- 백 엔드 : 김현정, 김윤희
- [프론트엔드 Github 링크](https://github.com/hrimwk/Okidoki-project)
- [백엔드 Github 링크](https://github.com/wecode-bootcamp-korea/justcode-6-2nd-team3-back)

<br>

## 구현 기능
(본인 구현 부분만 작성했습니다.)

    - 메인 페이지
    - 게시글 작성(각 카테고리별 및 구인)
    - 태그 검색 및 생성

<br>

### **프로젝트 선정이유**

  커뮤니티 사이트를 통하여 CRUD 기능 구현뿐만 아니라, 게시글과 댓글의 다양한 사용자 상호 작용 기능을 구현하고싶어 선정

<br>

## **적용 기술 및 구현 기능**

### **적용 기술**

> **Front-End** : Html, css, Javascript, React.js, styled components
> 

> **Back-End** : Node.js, express, Bcrypt, JWT, RESTful API

<br>

### **DB 모델링**
![image](https://user-images.githubusercontent.com/104122566/194026010-bdc49d1c-ef55-43b2-b006-a5bbdb8804d7.png)

<br>

### **구현 기능**
📌[API 명세서 ](https://documenter.getpostman.com/view/22727251/2s7Z7Tsc5q#9004ec23-b6a3-49fb-9022-2d58d3593b3c)

**태그 검색 / 저장**
- 태그의 목록을 가져오는 API
- 사용자 정보, 게시글에 태그 추가를 추가할 때 저장된 태그들을 불러오도록 기능을 구현하였습니다
- 검색 되지 않는 태그들은 DB에 insert 되도록 하였습니다

**게시글 작성**
- 게시글 작성하는 API
- 요청할 때 함께 들어온 token으로 사용자를 확인하고 게시글이 작성됩니다.
- 구인게시판의 경우 들어오는 필드값이 다르기 때문에 일반게시판과 구인게시판의 작성을 구분하였습니다.
- 공지사항은 관리자만, 구인게시판은 기업가입자만 글이 작성 가능 하도록 하였습니다.
- 게시글이 작성될 때마다 사용자의 활동점수가 증가합니다.

**메뉴목록 가져오기**
- 메뉴 목록을 가져오는 API
- 메인 메뉴목록과 하위에 존재하는 서브 메뉴 목록들을 가지고 오는 기능 입니다.
<br>

## **팀 노션**
[okidoi] https://www.notion.so/3-83c51b5d9ea74206bf7eedb10e53bc1b
