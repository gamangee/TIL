# SPA (Single Page Application)이란?

하나의 페이지로 이루어진 애플리케이션
서버로부터 웹 어플리케이션이 필요한 모든 정적 리소스를 **최초 1번만** 다운로드 받는다. 그 이후에는 페이지 갱신이 **필요할 때만** 서버에 요청한다.

# MPA(Multiple Page Application)이란?

여러 개의 페이지로 이루어진 애플리케이션
서버로부터 **완성된 형태**의 HTML 파일을 전달받는다. 새로운 페이지로 이동할 때마다 **전체 페이지를 다시 렌더링**한다.

# SPA vs MPA

<img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff16e4752-142e-4bc6-909a-0f849ba0a1c3%2Fspavsmpa.jpg?table=block&id=d815bf0e-580a-4e9d-84cc-8d1df951a354&spaceId=56be705a-96cb-4724-89d3-1c6c7156708b&width=1920&userId=ba7daf4a-e9c5-4451-8ea4-825e1bea845b&cache=v2" />

# SEO 최적화 할 수 있는 방법

1. SSR 방식
   <img src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F20eab772-f6dc-447d-b5c3-8666187ae18c%2Fcsrvsssr.jpg?table=block&id=d2e5b80f-8253-48d3-a8c0-7e72b9de0803&spaceId=56be705a-96cb-4724-89d3-1c6c7156708b&width=1920&userId=ba7daf4a-e9c5-4451-8ea4-825e1bea845b&cache=v2" />

2. `pre-rendering` :
   서버에서 요청하는 자가 사람인지 크롤러인지 판단하여, 사람에게는 HTML과 JS 등을 제공하고 **크롤러에게는 사전에 렌더링된 HTML 버전의 페이지를 보여주는 방식**

3. `SEO 우회 라이브러리` : react-helmet, prerender-spa-plugin, prerender.io, puppeteer, rendertron

4. `History API` URL과 같은 주소를 부여하는 API

   크롤링 뿐만 아니라 백링크(신뢰할 수 있는 외부링크)를 얻기 용이하다
