# async & await
`정의` 비동기를 동기식으로 처리하는 문법

`등장배경` 기존의 callback  이나 Promise  의 단점을 해소하고자 만들어졌다.

`사용법`

function 키워드 앞에 async만 붙여주면 되고

비동기로 처리되는 부분 앞에 await만 붙여주면 된다.

`특징`

async 함수의 리턴 값은 무조건 `Promise` 이다.

- async가 붙은 함수는 프라미스를 반환하고, 프라미스가 아닌 것은 프라미스로 감싸 반환한다.
- await 키워드를 만나면 프라미스가 처리(settled)될 때까지 기다린다.

`장점`

- promise.then보다 가독성 좋고 쓰기도 쉽다.
- try/catch로 에러를 핸들링할 수 있다
- 에러가 어디서 발생했는지 알기 쉽다.

`단점`

- Promise를 완벽히 대체하는 것이 아니다.
- async함수 바깥의 최상위 레벨 코드에선 await를 사용할 수 없다.

## Promise vs async & await
`Promise`

```jsx
function p() {
	return new Promise((resolve, reject) => {
	    resolve('hello'); 
        // or reject(new Error('error');
	});
}
 
p().then((n) => console.log(n));
```

`async & await`

```jsx
async function p2(){ // async을 지정해주면 Promise를 리턴하는 함수로 만들어준다.
  return 'hello2'; //리턴값은 Promise{<resolved>: "hello2"} 자동 resolve해준다는걸 알 수있다.
  // reject는 throw 에러를 날리면 된다.
}
 
p2().then((n) => console.log(n));
```