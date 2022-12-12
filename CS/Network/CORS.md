# SOP(Same Origin Policy) 동일 출처 정책

`정의` 다른 출처의 리소스를 사용하는 것에 제한하는 보안 방식

`특징` url의 protocol, host, port를 통해 같은 출처인지 다른 출처인지 판단할 수 있다.

# 📌 CORS(Cross-Origin Resource Sharing) 교차 출처 리소스 공유

`정의` 서로 다른 도메인 간 자원을 공유하는 것을 의미하며 기본적으로 차단되어 있다.

`동작원리`

HTTP 프로토콜을 사용하여 브라우저에서 요청 헤더의 Origin 필드와 응답 헤더의 Access-Control-Allow-Origin 필드를 비교하여 응답의 유효성을 판단한다.

`요청방법`

1. 예비 요청을 보내는 \*preflight request
2. 예비 요청이 없이 본 요청을 바로 보내는 simple request
3. 인증 정보를 담아서 보내는 credentialed request

`해경방법`

1. 직접 서버에서 Access-Control-Allow-Origin 헤더 세팅하기
2. 우회 JSONP (JSON with Padding)
3. 대신 프록시(proxy) 서버 사용

### \*preflight 보내는 이유

브라우저가 CORS를 지원하지 않은 서버에 도달하면 요청에 대한 응답을 보내지 않아 실제 요청이 수행되지 않도록 보호하기 위해서
