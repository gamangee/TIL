
# π Closure(ν΄λ‘μ )



`μ μ` μ΄λ€ ν¨μ Aμμ μ μΈν λ³μ aλ₯Ό μ°Έμ‘°νλ λ΄λΆν¨μ Bλ₯Ό μΈλΆλ‘ μ λ¬ν  κ²½μ°, Aμ μ€ν μ»¨νμ€νΈκ° μ’λ£λ μ΄νμλ λ³μ aκ° μ¬λΌμ§μ§ μλ νμ

`νμ©` νμ¬ μνλ₯Ό κΈ°μ΅νκ³ , λ³κ²½λ μ΅μ  μνλ₯Ό μ μ§

1. μ μ­ λ³μ μ¬μ© μ΅μ 
2 μ λ³΄μ μλ                                                                                                                                                                                                                                                                                                                                                                                                                                                               

`νμ©μ¬λ‘`

## 1. μ½λ°± ν¨μ λ΄λΆμμ μΈλΆ λ°μ΄ν°λ₯Ό μ¬μ©νκ³ μ ν  λ

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

β λ΄λΆν¨μμμ μ¬μ©λλΒ `fruit`μ (A)μ μ’λ£μμλ (μ€ν μ»¨νμ€νΈμμ μ μΈλμ΄λ) κ°λΉμ§ μ»¬λ ν°μ μκ±° λμμ΄ λμ§ μμ κ³μ μ°Έμ‘°κ° κ°λ₯νλ€.

## 2. μ κ·Ό κΆν μ μ΄(μ λ³΄ μλ)

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

β μΈλΆμ μ κ³΅νκ³ μ νλ μ λ³΄λ€μ λͺ¨μμ return νκ³ , λ΄λΆμμλ§ μ¬μ©ν  μ λ³΄λ€μ return νμ§ μλ κ²μΌλ‘ μ κ·Ό κΆν μ μ΄κ° κ°λ₯νλ€.

## 3. λΆλΆ μ μ© ν¨μ

`μ μ` nκ°μ μΈμλ₯Ό λ°λ ν¨μμ λ―Έλ¦¬ mκ°μ μΈμλ§ λκ²¨ κΈ°μ΅μμΌ°λ€κ°, λμ€μ (n-m)κ°μ μΈμλ₯Ό λκΈ°λ©΄ λΉλ‘μ μλ ν¨μμ μ€ν κ²°κ³Όλ₯Ό μ»μ μ μκ²λ νλ ν¨μ

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

β λ―Έλ¦¬ μΌλΆ μΈμλ€μ λκ²¨λμ΄ κΈ°μ΅νκ² νκ³ , μΆν νμν μμ μ κΈ°μ΅νλ μΈμλ€κΉμ§ ν¨κ» μ€ννλ€.

`λλ°μ΄μ€(debounce)` : μ§§μ μκ° λμ μ΄λ²€νΈκ° λ§μ΄ λ°μν  κ²½μ° μ΄λ₯Ό μ λΆ μ²λ¦¬νμ§ μκ³  μ²μ λλ λ§μ§λ§μ λ°μν μ΄λ²€νΈμ λν΄ ν λ²λ§ μ²λ¦¬νλ κ²

ex) scroll, wheel, mousemove, resize

## 4. μ»€λ§ ν¨μ

`μ μ` μ¬λ¬ κ°μ μΈμλ₯Ό λ°λ ν¨μλ₯Ό νλμ μΈμλ§ λ°λ ν¨μλ‘ λλ μ μμ°¨μ μΌλ‘ νΈμΆλ  μ μκ² μ²΄μΈ νν

`νμ΄νν¨μ`

```jsx
var curry = func => a => b => c => d => e => func(a, b, c, d, e);
```

β νμ΄ν μμμ λ°λΌ ν¨μμ κ°μ μ°¨λ‘λ‘ λκ²¨μ£Όλ©΄ λ§μ§λ§μ funcκ° νΈμΆλ  κ±°λΌλ νλ¦μ΄ νλμ νμλλ€.

β κ° λ¨κ³μμ λ°μ μΈμλ€μ λͺ¨λ λ§μ§λ§ λ¨κ³μμ μ°Έμ‘°ν  κ²μ΄λ―λ‘ GCλμ§ μκ³  λ©λͺ¨λ¦¬μ μ°¨κ³‘μ°¨κ³‘ μμλ€κ°, λ§μ§λ§ νΈμΆλ‘ μ€ν μ»¨νμ€νΈκ° μ’λ£λ νμμΌ λΉλ‘μ νκΊΌλ²μ GCμ μκ±° λμμ΄ λλ€.

`λ―Έλ€μ¨μ΄`

`νΉμ§` μ§μ° μ€νμ μ£Όλ‘ μ¬μ©

```jsx
// redux-thunk
const thunk = store => next => dispatch => {
	return typeof action === "function"
  		? action(dispatch, store.getState)
  		: next(action);
}
```

β `store`μΒ `next`μ κ°μ΄ κ²°μ λλ©΄, Redux λ΄λΆμμ λ―Έλ¦¬ λκ²¨μ£Όμ΄ λ°νλ ν¨μλ₯Ό μ μ₯μμΌλκ³ ,Β μ΄νμΒ `action`λ§ λ°μμ μ²λ¦¬νλ λ‘μ§μ΄λ€.

# β λ©λͺ¨λ¦¬ κ΄λ¦¬

ν΄λ‘μ λ μ°Έμ‘°κ°μ΄ κ°λΉμ§ μ»¬λ ν°μ μκ±°λμμ΄ λμ§ μμΌλ―λ‘ λ©λͺ¨λ¦¬ μλͺ¨κ° μ‘΄μ¬νλ€.λ°λΌμ λ μ΄μ μ¬μ©νμ§ μλ ν΄λ‘μ μ λν΄μλ λ©λͺ¨λ¦¬λ₯Ό μ°¨μ§νμ§ μλλ‘ κ΄λ¦¬ν΄μ€ νμκ° μλ€.

β μλ³μμ μ°Έμ‘°νμ΄ μλ κΈ°λ³Έν λ°μ΄ν°(λ³΄ν΅ nullμ΄λ undefined)λ₯Ό ν λΉνλ©΄ λλ€.

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
outer = null;   // innerμ μ°Έμ‘°λ₯Ό λμ
```

#### 2. setInterval

```jsx
(function(){
    var a = 0;
    var intervalId = null;
    var inner = function(){
        if(++a >= 10){
            clearInterval(intervalId);
            inner = null;       // inner μλ³μμ μ°Έμ‘° λκΈ°
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
            clickHandler = null;    // clickHandler μλ³μμ ν¨μ μ°Έμ‘°λ₯Ό λμ.
        }
    };

    button.addEventListener('click', clickHandler);
    document.body.appendChild(button);
})();
```