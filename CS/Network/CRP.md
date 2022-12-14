# π‘ CRP(Critical Rendering Path)

`μ μ` μλ²μ HTMLνμ΄μ§λ₯Ό μμ²­νλ μκ°λΆν° λΈλΌμ°μ κ° λ΄μ©μ νλ©΄μ νκΈ°νκΈ°κΉμ§μ λ¨κ³

`κ³Όμ `

Construction κ³Όμ 

1. Request/Response : λΈλΌμ°μ κ° μλ²μκ² HTML νμΌ μμ²­
2. HTML νμ± β DOM Tree
3. CSS νμ± β CSSOM Tree
4. Javascript νμ± β DOM + CSSOM β Render Tree(νλ©΄μ μ€μ λ‘ λ³΄μ΄λ κ²λ§)

Operation κ³Όμ 

1. Layout(reflow) : veiwport λ΄μμ μμλ€μ μ νν μμΉμ ν¬κΈ°λ₯Ό κ³μ°
2. Painting : νλ©΄μ μ€μ  ν½μλ‘ κ·Έλ €μ§λλ‘ λ³ν
3. composite : λ μ΄μμ μμλλ‘ νλ©΄μ μΆλ ₯

`μ°Έκ³ ` [csstriggers](https://csstriggers.com/)

# π CRP μ΅μ ν νλ λ°©λ²

1. DOM μ‘°μ μ΅μν
2. νμΌ ν¬κΈ° μ€μ΄κΈ°

   Webpack μ¬μ©Β - νμΌ μ©λ μμΆ λ° λ²λ€λ§μ ν΅ν νμΌ κ°μ κ°μ

3. μ΄κΈ° λ λλ§ μ΅μ ν
   1. λ¦¬μμ€ μ°μ μμ μ§μ  : lazy loading
   2. SSR β JS λ²λ€λ§ μ΅μν

### π CSS

1. CSS Contain μμ±

   λ μ΄μμ κ³Όμ  μ€ reflow μκ°μ λ¨μΆ

2. Graphics Layer

   κΈ°μ‘΄ λ μ΄μ΄μμ λΆλ¦¬λμ΄ λ³λλ‘ λ λλ§ μ§ν

3. CSS will-change

   μ¦κ°μ μΈ λ³νκ° μμΈ‘λ  λ

### π React

π μ»΄ν¬λνΈ λ¦¬λλλ§ μ‘°κ±΄

- λΆλͺ¨μμ μ λ¬λ°μΒ `props`κ° λ³κ²½λ  λ
- λΆλͺ¨ μ»΄ν¬λνΈκ° λ¦¬λ λλ§ λ  λ
- μμ μΒ `state`κ° λ³κ²½ λ  λ

π λλλ§ μ΅μ ν λ°©λ²

1. `React.memo` propsμ λ³κ²½ μ¬λΆλ§μ μ²΄ν¬
2. `useMemo` ν¨μμ μ°μ°λμ΄ λ§μλ μ΄μ  κ²°κ³Όκ°μ μ¬μ¬μ©
3. `useCallback` ν¨μκ° μ¬μμ± λλκ²μ λ°©μ§

π λλλ§ μ±λ₯ νμΈ λ°©λ²

1. Lighthose : μΉ μ±μ νμ§μ κ°μ νλ μ€ν μμ€ μλν λκ΅¬
2. DevTools
   1. Chrome : Performance-EvnetLog
   2. React Dev Tools : Profiler
3. console.log()

### π Pure JavaScriptμμ Lazy Loadingμ κ΅¬ν λ°©λ²

1. `loading=lazy` : μ€μνμ§ μμ μ΄λ―Έμ§ μ§μ°μν¬ λ

   ```jsx
   <img src="image.png" loading="lazy">
   <iframe src="tutorial.html" loading="lazy"></iframe>
   ```

2. `Intersection Observer API`
3. `async` : JavaScript λ¦¬μμ€κ° λ€μ΄λ‘λλλ λμ λΈλΌμ°μ κ° λ€λ₯Έ μμμ μνν  μ μλ€.
4. `defer` : HTML λ λλ§μ΄ λ°μνλ λμ JavaScript λ¦¬μμ€κ° λ€μ΄λ‘λν  μ μλ€.
5. `preload` : JavaScript λλ CSS νμΌμ λ―Έλ¦¬ λ λλ§μν¬ μ μλ€.

   ```jsx
   <link rel="preload" href="style.css" as="style">
   <link rel="preload" href="main.js" as="script">
   ```
