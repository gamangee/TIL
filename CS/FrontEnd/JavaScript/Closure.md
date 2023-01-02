
# 📌 Closure(클로저)



`정의` 어떤 함수 A에서 선언한 변수 a를 참조하는 내부함수 B를 외부로 전달할 경우, A의 실행 컨텍스트가 종료된 이후에도 변수 a가 사라지지 않는 현상

`활용` 현재 상태를 기억하고, 변경된 최신 상태를 유지

1. 전역 변수 사용 억제
2 정보의 은닉                                                                                                                                                                                                                                                                                                                                                                                                                                                               

`활용사례`

## 1. 콜백 함수 내부에서 외부 데이터를 사용하고자 할 때

```jsx
var fruits = ['apple', 'banana', 'peach'];
var ul = document.createElement('ul');

fruits.forEach(function (fruit){ // (A)
    var li = document.createElement('li');
	li.innerText = fruit;
    li.addEventListener('click', function(){ // (B)
       alert('your choice is' + fruit);
    });
    ul.appendChild(li);
});
document.body.appendChild(ul);
```

⇒ 내부함수에서 사용되는 `fruit`은 (A)의 종료시에도 (실행 컨텍스트에서 제외되어도) 가비지 컬렉터의 수거 되상이 되지 않아 계속 참조가 가능하다.

## 2. 접근 권한 제어(정보 은닉)

```jsx
var outer = function(){
	var a = 1;
  	var inner = function (){
    	return ++a;
    }
    return inner;
};
var outer2 = outer();
console.log(outer2());
console.log(outer2());
```

⇒ 외부에 제공하고자 하는 정보들을 모아서 return 하고, 내부에서만 사용할 정보들은 return 하지 않는 것으로 접근 권한 제어가 가능하다.

## 3. 부분 적용 함수

`정의` n개의 인자를 받는 함수에 미리 m개의 인자만 넘겨 기억시켰다가, 나중에 (n-m)개의 인자를 넘기면 비로소 원래 함수의 실행 결과를 얻을 수 있게끔 하는 함수

```jsx
var add = funtcion(){
	var result = 0;
  	for(var i = 0; i < arguments.length; i++){
    	result += arguments[i];
    }
	return result;
};
var addPartial = add.bind(null, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10));
```

⇒ 미리 일부 인자들을 넘겨두어 기억하게 하고, 추후 필요한 시점에 기억했던 인자들까지 함께 실행한다.

`디바운스(debounce)` : 짧은 시간 동안 이벤트가 많이 발생할 경우 이를 전부 처리하지 않고 처음 또는 마지막에 발생한 이벤트에 대해 한 번만 처리하는 것

ex) scroll, wheel, mousemove, resize

## 4. 커링 함수

`정의` 여러 개의 인자를 받는 함수를 하나의 인자만 받는 함수로 나눠서 순차적으로 호출될 수 있게 체인 형태

`화살표함수`

```jsx
var curry = func => a => b => c => d => e => func(a, b, c, d, e);
```

⇒ 화살표 순서에 따라 함수에 값을 차례로 넘겨주면 마지막에 func가 호출될 거라는 흐름이 한눈에 파악된다.

⇒ 각 단계에서 받은 인자들을 모두 마지막 단계에서 참조할 것이므로 GC되지 않고 메모리에 차곡차곡 쌓였다가, 마지막 호출로 실행 컨텍스트가 종료된 후에야 비로소 한꺼번에 GC의 수거 대상이 된다.

`미들웨어`

`특징` 지연 실행에 주로 사용

```jsx
// redux-thunk
const thunk = store => next => dispatch => {
	return typeof action === "function"
  		? action(dispatch, store.getState)
  		: next(action);
}
```

⇒ `store`와 `next`의 값이 결정되면, Redux 내부에서 미리 넘겨주어 반환된 함수를 저장시켜놓고, 이후엔 `action`만 받아서 처리하는 로직이다.

# ❗ 메모리 관리

클로저는 참조값이 가비지 컬렉터의 수거대상이 되지 않으므로 메모리 소모가 존재한다.따라서 더 이상 사용하지 않는 클로저에 대해서는 메모리를 차지하지 않도록 관리해줄 필요가 있다.

⇒ 식별자에 참조형이 아닌 기본형 데이터(보통 null이나 undefined)를 할당하면 된다.

#### 1. return

```jsx
var outer = (function(){
    var a = 1;
    var inner = function(){
        return ++a;
    };
    return inner;
})();
console.log(outer());
console.log(outer());
outer = null;   // inner의 참조를 끊음
```

#### 2. setInterval

```jsx
(function(){
    var a = 0;
    var intervalId = null;
    var inner = function(){
        if(++a >= 10){
            clearInterval(intervalId);
            inner = null;       // inner 식별자의 참조 끊기
        }
        console.log(a);
    };
    intervalId = setInterval(inner, 1000);
})();
```

#### 3. eventListener

```jsx
(function(){
    var count = 0;
    var button = document.createElement('button');
    button.innerText = 'click';

    var clickHandler = function(){
        console.log(++count, 'times clicked');
        if(count >= 10){
            button.removeEventListener('click', clickHandler);
            clickHandler = null;    // clickHandler 식별자의 함수 참조를 끊음.
        }
    };

    button.addEventListener('click', clickHandler);
    document.body.appendChild(button);
})();
```