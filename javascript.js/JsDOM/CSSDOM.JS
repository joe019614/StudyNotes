
/* h1.setAttribute('style','text-align:center'); */ /*覆蓋原有*/
h1.style.textAlign='center'; /* 後加設定 */
h1.style.borderInline='dotted';
h1.style.inlineSize='20%'; 
h1.style.fontSize='40px';
/* const h1放係HTMLDOM 直接變更可以隔file改 */

const p1 = document.querySelector('.p1'); /* htmldomjs做左 */
console.log(p1.classList)
p1.classList.add('blackborder'); /* 呢種要變數係同一個file */
p1.classList.remove('redtext')
/*變數可以係呢邊consolelog
唔可以隔file改classlistadd */
