# ๐ var

- ์ค๋ณต ์ ์ธ ํ์ฉ (์ฌํ ๋นO, ์ฌ์ ์ธO)
- `ํจ์ ๋ ๋ฒจ ์ค์ฝํ`ย : ํจ์์ ์ฝ๋ ๋ธ๋ก๋ง์ ์ง์ญ ์ค์ฝํ๋ก ์ธ์ ํ๋ค.
- ์ฝ๋ ๋ธ๋ก ๋ด์์ ์ ์ธํด๋ ๋ชจ๋ ์ ์ญ ๋ณ์๊ฐ ๋๋ค. ์ด๋ก์ธํด ์๋์น ์๊ฒ ์ ์ญ ๋ณ์๊ฐ ์ค๋ณต ์ ์ธ๋๋ ๊ฒฝ์ฐ๊ฐ ๋ฐ์ํ๋ค.

# ๐ let

- ๋ณ์ ์ค๋ณต ์ ์ธ ๊ธ์ง (์ฌํ ๋นO, ์ฌ์ ์ธX)
- `๋ธ๋ก ๋ ๋ฒจ ์ค์ฝํ`ย : ๋ชจ๋  ์ฝ๋ ๋ธ๋ก์ ์ง์ญ ์ค์ฝํ๋ก ์ธ์ ํ๋ค.

# ๐ const

- ๋ฐ๋์ ์ ์ธ๊ณผ ๋์์ ์ด๊ธฐํ (์ฌํ ๋นX, ์ฌ์ ์ธX)
- let๊ณผ ๋์ผํ๊ฒย `๋ธ๋ก ๋ ๋ฒจ ์ค์ฝํ`
- ๋ณ์์ ๊ฐ์ฒด๋ฅผ ํ ๋นํ  ๊ฒฝ์ฐ ๊ฐ์ ๋ณ๊ฒฝํ  ์ ์๋ค.

### ์ผ์์  ์ฌ๊ฐ์ง๋(Temporal Dead Zone)๋?

let ๋๋ const์ผ๋ก ์ ์ธํ์ ๋, ์ ์ธ ์ด์ ์ ์๋ณ์๋ฅผ ์ฐธ์กฐํ  ์ ์๋ ๊ตฌ์ญ (ReferenceError ๋ฐ์)

์ค์ฝํ์ ์์ ์์ ๋ถํฐ ์ด๊ธฐํ ๋จ๊ณ ์์ ์ง์ (๋ณ์ ์ ์ธ๋ฌธ)๊น์ง ๋ณ์๋ฅผ ์ฐธ์กฐํ  ์ ์๋ ๊ตฌ๊ฐ

# ๐ var vs let vs const

|                 | var       | let       | const     |
| --------------- | --------- | --------- | --------- |
| ํธ์ด์คํ        | O         | O         | O         |
| ์ฌํ ๋น          | O         | O         | X         |
| ์ฌ์ ์ธ          | O         | X         | X         |
| ์ด๊ธฐํ          | undefined | X         | X         |
| ์ผ์์  ์ฌ๊ฐ์ง๋ | X         | O         | O         |
| ์ค์ฝํ          | ํจ์ ๋ ๋ฒจ | ๋ธ๋ก ๋ ๋ฒจ | ๋ธ๋ก ๋ ๋ฒจ |
