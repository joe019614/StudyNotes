/* const body = document.querySelector('body');
('動作',function) 可以arrow
body.addEventListener('click',function(){console.log('clickAdd');}); */

/* constdiv放係HTMLDOM */
console.log(div)
div.addEventListener('click',function(clickA){
    /* console.log(clickA.target) */; /* show你click既位 */
    /* clickA.target.remove(); */
    clickA.target.style.color= 'purple';
    clickA.target.style.fontSize='25px'; /* fontSize 大階S */
}
)

const img1 = document.querySelector('img');
console.log(img1);  /* print圖資訊>DOM.HTML 第31行  */
img1.setAttribute('height',120) /* 更改屬性 */
img1.setAttribute('style','border:5px solid lightblue'  )



const button1 = document.querySelector('#button1')

console.log(img1.style.width)
let currentWidth = img1.getAttribute('width');
img1.style.width=currentWidth+'px'; /* 要加單位先detect到 */
console.log(img1.style.width); /* 400px */

button1.addEventListener('click',function(){
    let newWidthBig=parseInt(img1.style.width) +30;
    img1.style.width = newWidthBig+'px';
    console.log(`now width:${img1.style.width}`);
})

const button2 = document.querySelector('#button2')

button2.addEventListener('click',function(){
    let newWidthSmall= parseInt(img1.style.width)-30;
    img1.style.width = newWidthSmall+'px';
    console.log(`now width:${img1.style.width}`)
})

