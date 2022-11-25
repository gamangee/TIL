# REST
- Representational State Transfer의 약자
- 자원(resource)의 표현(representation)에 의한 상태 전달

> HTTP 통신에서 웹에서 제공하는 자원을 가리키는 고유한 주소(URI)를 이용하고 HTTP Method(GET, POST, PUT, PATCH, DELETE)를 통해 CRUD 요청을 처리하는 방식입니다.
    
# RESTful API
- HTTP 통신을 REST 설계 규칙을 잘 지켜서 개발한 API
- 요청 자체에서 어떤 동작이나 정보를 위한 것인지 추론이 가능하다는 장점을 가지고 있습니다.

# GraphQL
- Graph Query Language
- `배경` 다양한 기종에서 필요한 정보들을 일일이 구현하기 어렵고, 정보를 사용하는 측에서 원하는 대로 정보를 가져올 수 있고, 보다 편하게 정보를 수정할 수 있도록 하기 위해 만들어졌다
- `특징`
    [1] 하나의 엔티포인트만을 사용한다
    [2] Query문에 따라 응답 구조가 달라진다
    [3] 원하는 데이터만 받을 수 있다
- `장점`
    [1] HTTP 요청 횟수를 줄일 수 있다
    [2] HTTP 응답 사이즈를 줄일 수 있다
- `단점`
    [1] 때로는 요청의 크기가 RESTful 보다 커질 수 있다
    [2] 캐싱이 REST 보다 복잡하다
    [3] 파일 업로드 구현 방법이 정해져 있지 않아 직접 구현해야 한다