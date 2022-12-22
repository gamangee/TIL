# Promise
`정의` 자바스크립트 비동기 처리에 사용되는 객체

`특징`

1. Promise로 구현된 비동기 함수는 Promise 객체를 반환하여야 한다.
2. Promise로 구현된 비동기 함수를 호출하는 측(promise consumer)에서는 Promise 객체의 후속 처리 메소드(then, catch)를 통해 비동기 처리 결과 또는 에러 메시지를 전달받아 처리한다.
3. Promise 객체가 갖는 상태에 따라 후속 처리 메소드를 체이닝 방식으로 호출한다.

## 🤟3가지 상태(states) : 프로미스의 처리 과정

1. `Pending(대기)`
    - 비동기 처리 로직이 아직 완료되지 않은 상태
    - new Promise() 메서드를 호출하면 대기(Pending) 상태가 된다.
    - new Promise()  메서드를 호출할 때 콜백 함수를 선언할 수 있고, 콜백 함수의 인자는 `resolve`, `reject`이다.
2. `Fulfilled(완료)`
    - 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
    - 콜백 함수의 인자 `resolve` 를 실행하면 완료(Fulfilled) 상태가 된다.
    - 완료 상태가 되면 `then()`을 이용하여 처리 결과 값을 받을 수 있다.
3. `Rejected(실패)`
    - 비동기 처리가 실패하거나 오류가 발생한 상태
    - 콜백 함수의 인자 `reject`를 실행하면 실패(Rejected) 상태가 된다.
    - 실패 상태가 되면 실패한 이유(실패 처리의 결과 값)를 `catch()`
    로 받을 수 있다.
    

##Promise 객체의 후속 처리 메소드

1. `then`
    
    두 개의 콜백 함수를 인자로 전달 받는다.
    
    첫 번째 콜백 함수는 성공(fulfilled, resolve 함수가 호출된 상태) 시 호출되고 두 번째 함수는 실패(rejected, reject 함수가 호출된 상태) 시 호출된다.
    
2. `catch`
    
    예외(비동기 처리에서 발생한 에러와 then 메소드에서 발생한 에러)가 발생하면 호출된다.
    

### callback hell

비동기 함수의 처리 결과를 가지고 다른 비동기 함수를 호출해야 하는 경우, 함수의 호출이 중첩(nesting)이 되어 복잡도가 높아지는 현상

코드의 가독성을 나쁘게 하고 복잡도를 증가시켜 실수를 유발하는 원인이 되며 에러 처리가 곤란하다.

### Callback vs Promise

callback을 사용하면 비동기 로직의 결과값을 처리하기 위해서는 callback안에서만 처리를 해야하고, 콜백 밖에서는 비동기에서 온 값을 알 수가 없다. 하지만 promise를 사용하면 비동기에에서 온 값이 promise 객체에 저장되기 때문에 코드 작성이 용이하다.

또,Promise 클래스는 비동기 처리만을 위해 만들어졌기 때문에 클래스에 resolve나 reject 함수를 적절하게 사용하여 코드의 가독성을 높이고 콜백 패턴에 비해 에러처리가 쉬워졌다.

### Promise vs Async-await

Promise는 아무래도 클래스이다 보니 함수형 컴포넌트가 대세가 된 지금은 함수에 바로 적용 가능한 async-await가 문법적으로 더 잘 맞고 async-awiat가 비동기 코드를 동기 형태로 만들어 가독성을 더 높이는 것에 큰 차이가 있다

## error handling
```jsx
axios
  .get('/api/user/123')
  .then(
    (value) => {
      // 성공
      console.log('user info', JSON.parse(value))
    },
    (error) => {
      // http 에러 (40x, 50x...)
      console.log('http error', error.response.status)
    },
  )
  .catch((error) => {
    // 예측하지 못한 에러
    console.log('Unexpected Error!', error)
  })
```

1. `then`문에서 `resolve`로 정상적으로 응답이 왔을 때 (2xx, 3xx) 처리
2. `reject`로 http request에러 (4xx, 5xx)처리
3. `catch`문에서는 예측하지 못한 에러를 핸들링하고 있는데, 이 경우는 `JSON.parse`에 실패하는 경우 등의 시나리오에서 호출 될 것이다.