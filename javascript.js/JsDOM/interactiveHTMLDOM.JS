 /* const div 係HTMLDOM */

 /* 整新tag */
 const newP = document.createElement('p');
 newP.innerText='.innerText';
 
/*  div.append(newP); */ /* 放尾 */
 div.prepend(newP); /* 放頭 */