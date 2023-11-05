const p0 = document.querySelector('p'); /* 第一個<p>tag */
console.log(p0);

/* const p1 = document.querySelector('.p1'); */ /* 例<p class="p1b"> */
/* 放左係cssdom (p1.classList.add()) */


const p2 = document.querySelector('#p2i'); /* <p id="p2i"> */
console.log(p2);

/* const img1 = document.querySelector('img');
console.log(img1); 放左係clickevent.js
console.log(img1.getAttribute('width'));
 */

const pall = document.querySelectorAll('p');  /* 全<p>tag */
console.log(pall);

pall.forEach(function(a){console.log(a)}) 

const h1 = document.querySelector('h1');

/* 右鍵檢查check位>copy>copy selector */
const heading = document.querySelector('body > h1');
console.log(heading);

const div = document.querySelector('div');
console.log(div);
console.log(div.innerHTML);

/* 修改文字內容 */
p0.innerText += ' (純文字修改.innerText) ' /* 純文字 */
div.innerHTML += '<p><strong> </br> div修改後內容 </strong></p>' /*連html*/

/* 修改屬性 */
/* img1.setAttribute('height',150) 放左係clickevent.js
img1.setAttribute('style','border:5px solid lightblue'  ) */