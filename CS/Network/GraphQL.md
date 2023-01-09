# GraphQL

- Graph Query Language의 약자
- 페이스북에서 만든 어플리케이션 레이어 쿼리 언어
- `기존` 우리가 클라이언트사이드에서 어떠한 기능이 필요 할 때마다 그때 그때 새로운 API를 만들어 주었어야 했다.
- `목적` 웹 클라이언트가 데이터를 서버로 부터 효율적으로 가져오는 것
- `방법` Endpoint는 통상 1개만 생성하고 클라이언트에게 필요한 데이터는 클라이언트가 직접 쿼리를 작성, 호출하여 반환 받는다.
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

### REST vs GraphQl

1. REST에서는 URI가 Resource를 나타내고 Method가 작업의 유형을 나타내지만, GraphQL에서는 GraphQL Schema가 Resource를 나타내고 Query, Mutation 타입이 작업의 유형을 나타낸다.
2. REST는 요청이 단순하지만 데이터는 복잡하다. 받아야 할 항목이 많거나 확실한 한가지의 요청만 있을 경우 사용한다. GraphQL은 요청은 복잡하지만 복잡한 데이터를 효율적으로 가져올 때 사용한다.

- `Query`

```javascript
query {
    account(id: "1") {
        username
        email
        firstName
        lastName
        friends {
            firstName
            username
        }
    }
}
```

- `Result`

```javascript
{
  "data": {
    "account": {
      "username": "velopert",
      "email": "public.velopert@gmail.com",
      "firstName": "Minjun",
      "lastName": "Kim",
      "friends": [
        {
          "firstName": "Jayna",
          "username": "jn4kim"
        },
        {
          "firstName": "Abet",
          "username": "abet"
        }
      ]
    }
  }
}
```

# Apollo

- `정의` GraphQL을 편하게 사용할 수 있도록 도와주는 라이브러리
- `장점`

1. client와 server 모두에서 사용이 가능
2. apollo client는 상태관리 라이브러리로 react redux를, apolo server는 REST API 를 대체
3. 간편하고 쉬운 설정
4. 풍성한 기능 제공
