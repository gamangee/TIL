# DOM vs Virtual DOM

<aside>
๐ DOM(Document Object Model)

</aside>

`์ ์` HTML ๋ฌธ์๋ฅผ ๋ธ๋ผ์ฐ์ ๊ฐ ์ดํดํ  ์ ์๊ณ , ๋ฉ๋ชจ๋ฆฌ์ ๋ณด๊ดํ  ์ ์๋ ๊ฐ์ฒด์ ํธ๋ฆฌ ๊ตฌ์กฐ ํํ๋ก ๊ตฌ์กฐํํ ์๋ฃ๊ตฌ์กฐ

`ํน์ง` ์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ํตํด ๋์ ์ผ๋ก ๋ณ๊ฒฝํ  ์ ์์ผ๋ฉฐ ๋ณ๊ฒฝ๋ DOM์ ๋ ๋๋ง์ ๋ฐ์๋๋ค.

`๊ตฌ์ฑ`

1. ๋ฌธ์ ๋ธ๋(Document Node) : ํธ๋ฆฌ์ ์ต์์ ๊ฐ์ฒด(=DOM tree์ ์์์ )
2. ์์ ๋ธ๋(Element Node) : HTML ์์
3. ์ดํธ๋ฆฌ๋ทฐํธ ๋ธ๋(Attribute Node) : HTML ์์์ ์ดํธ๋ฆฌ๋ทฐํธ
4. ํ์คํธ ๋ธ๋(Text Node) : HTML ์์์ ํ์คํธ(=DOM tree์ ์ต์ข๋จ)

`๋ฌธ์ `

๋ธ๋์ ์โ or DOM ์กฐ์โ โ ๋ธ๋ผ์ฐ์  ๋ ๋๋งโ โ ๋ธ๋ผ์ฐ์  ์ฑ๋ฅ, ์๋โ

<aside>
๐ Virtual DOM

</aside>

`์ ์` ์ค์  DOM์์ ์ฒ๋ฆฌํ๋ ๋ฐฉ์์ด ์๋ Virtual DOM๊ณผ ๋ฉ๋ชจ๋ฆฌ์์ ๋ฏธ๋ฆฌ ์ฒ๋ฆฌํ๊ณ  ์ ์ฅํ ํ ์ค์  DOM๊ณผ ๋๊ธฐํ ํ๋ ํ๋ก๊ทธ๋๋ฐ ๊ฐ๋

`์ฅ์ ` DOM์ ์ต์ํ์ผ๋ก ์กฐ์ํ์ฌ ๋ธ๋ผ์ฐ์  ์ฑ๋ฅ ์ ํ๋ฅผ ์ต์ํํ๋ค.

<aside>
๐ DOM vs Virtual DOM

</aside>

|                              | DOM             | Virtual DOM                                                       |
| ---------------------------- | --------------- | ----------------------------------------------------------------- |
| ์๋ฐ์ดํธ                     | ๋๋ฆฌ๋ค          | ๋น ๋ฅด๋ค                                                            |
| HTML ์๋ฐ์ดํธ ๋ฐฉ์           | ์ง์             | ๊ฐ์                                                               |
| ์๋ก์ด element ์๋ฐ์ดํธ ๋ฐฉ์ | ์๋ก์ด DOM ์์ฑ | ์๋ก์ด ๊ฐ์ DOM ์์ฑ ํ ์ด์  DOM๊ณผ ๋น๊ตํ์ฌ ์ฐจ์ด์  DOM๋ง ์๋ฐ์ดํธ |
| ๋ฉ๋ชจ๋ฆฌ                       | ๋ญ๋น            | ๋ญ๋น๊ฐ ๋ํจ                                                       |
