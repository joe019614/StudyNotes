/* alert("welcomeJS.JS"); */ /* 彈訊息 */
/* 分號作結 / 註解快捷鍵 alt+shift+a*/

/* 變數(variable): */
let a=10;
let b='jstest';
console.log(a,b); /* > 10 'jstest'  a+b>10jstest*/
a=20;
console.log(a); /* >20   #更新變數數值唔使Let */

/* 常數(constant不能更改): */
const c = 'home';
console.log(c);/* >'home' */

/* null/undefined: */
let d = null; /*(講明味有數值) */
console.log(d)
let e;
console.log(e) /*>undefined(味定義) */

/*改名:
a $ _ 開頭
a 123 _ $ 其他 */

console.log('5='+(3+2)); /* 加法 */
/*array*/
let f = ['a1','a2','a3',3,4,5];
console.log(f)

/*object*/
let g = {
    A1 : 'joe',
    A2 : '24',
    A3 : true,
    A4 : ['a1','a2','a3',3,4,5]
};
console.log(g)

let h ='youtube';
let i ='javescript';
console.log(h+ 'a_b_c'+i ); /* >youtubea_b_cjavescript */
console.log(h[2]); /*第3格*/
console.log(h.length);/*搵長度*/
let j='jooo';
console.log('A1 '+h+' A2 '+i+','+j);
console.log(`A1 ${h} A2 ${i},${j}`); /* ` ${} 蛇仔鍵 */

let k = '     abctest     ';
console.log(k);
console.log(k.trimStart()) /* trim去除頭尾空格 trimStart trim trimEnd*/
let l = '2023/6/6' ;
console.log(l.substring(0,3)); /* 0位:第3格前 012 >202 */
console.log(l.replace('6','99')); /* 轉頭一個  replaceall轉全部 */

/* 加+ 減- 乘* 除/ 次方// 餘數%*/
m=((1+2)*3/5**2-6); /* 5*2)-6 括號>次方>除>乘>加>減 */
console.log(m);

/* a=a+2 a+=2一樣 /a-=2 a*=2 */
let n = 3;
n +=2;
console.log(n);
let o=1;
o++; /* 加一 or 減一 only */
console.log(o);
console.log(1-'a')/*  會出NaN Not a Number */
let p=12.3456;
console.log(p.toFixed(2)) /* 小數點第幾位4捨5入 */
console.log(Math.round(p))/* 將浮點數變整數 */
console.log(Math.random()); /* 0~1既隨機數 0.1234567 */
console.log(Math.round(Math.random()*100)) /* 0~100既random */

/* Array陣例 */
let q = ['ar1','ar2','ar3','ar4'];
console.log(q)
console.log(q[2]) /* 第3格 */
console.log(q.length) /* 數量 */
console.log(q.indexOf('ar3'))  /* 搵元素位置 -1=搵唔到 */
console.log(q.includes('ar3')) /* 搵元素存在 True False */
q.push('ar5') /* 新增元素 */
q.pop('ar1') /* 刪除元素 */

/* 2D Array 2維陣例 */
let r = [
    ['array1','1a'],
    ['array2','2a']
]
console.log(r[1][0]) /* >'array2' */


/* if elseif else; */
/* ==數值等於 ===數值同類型都等於*/
/* &&=and ||=or !=not */
let s=7;
let pass=null;
if(s>=90)
{ console.log(`u got${s}pt,A`);}
else if (s>=75 && s<90)
{console.log(`u got${s}pt,B`);}
else if (s>=50 && s<75)
{console.log(`u got${s}pt,C`);}
else
{console.log(`u got${s}pt,F fail`)}
/* if else簡短寫法 */
console.log((s>=50)?`u got${s}pt,pass`:`u got${s}pt,fail`);
console.log ('u got'+s+'pt')



/* Switch */
let t='A' /* let t=prompt('input ur grade'); */ /* alert咁整格野比你輸入 */
switch(t.toUpperCase())/* 自動大階 */
{
    case 'A': /* if */
        console.log('>=95');
        break;
    case 'B': /* else if  */
        console.log('>=75 && <90');
        break;
    case 'C': /* else if  */
            console.log('>=50 && <=74');
            break;
    default:  /* else */
                console.log('<50');
                break;
}

/* ForLoop */
for(let u=1 ;u<=10 ;u++) /* loop個陣行第3part>第2part */
{console.log(`u=${u}`)};
/* ** */
let vlist= ['v1','v2','v3','v4','v5'];
console.log(vlist);
for(let v=0; v<vlist.length; v++)
{
    if(vlist[v]=='v2')
    continue; /* 經過v2就skip,直接迴圈唔洗print */
    if(vlist[v]=='v4')
    {
    console.log(`v4found,in array no.${v+1}`);
    break;
    }
console.log(`vlist ID:${v+1}: ${vlist[v]}`);        
}

/* While Loop */ /* 睇條件決定loop */
let wlist = [1,2,3,4,5];
let w = 0;
console.log(wlist);
while (w<wlist.length)
{
    console.log(`now list no.${w+1}:${wlist[w]}`);
    w++;
}



/* Do-While Loop */ /* loop完再睇條件 */
let w2= wlist.length-1;  /*唔-1會多一格undefined條list冇第5位既數*/
do{
    console.log(wlist[w2])
    w2--;
}while(w2>=0)
 
/* Function Declaration */
fd();
function fd(){
    console.log('Function Declaration');
}
fd();
/* Function Expression */
const fe= function(){
    console.log('Function Expression');
}
fe();
/* JavaScript Declaration are Hoisted ** (Hoisting)
https://blog.techbridge.cc/2018/11/10/javascript-hoisting/ 
FD可以先使用後定義
FE定義後先可使用*/

/* Parameter 參數 */
const F1 = function(message1,message2){
    console.log(message1,message2);
}
F1('LocalVariable','本地變數只限此function內使用');

let F2 = 'GlobalVariable';
console.log(F2);

/* 預設參數/Return ** */
const rectangleArea=function(width=3,height=5){
    console.log(width*height)
    return(width*height);
}
rectangleArea(3,2);
console.log(rectangleArea(4,3)) /*冇return會變undefined*/

/* Arrow Function */
/* Function內容得一行唔洗{}  參數(width)得一樣唔洗()*/
/* 內容得return(123)就唔洗打埋return */
const rectangleArea2 = (width=3,height=5) => console.log(width*height);
rectangleArea2(20,40); 
const AF2 = 變數 => console.log(變數*2);
AF2(47); 
const AF3 = msg3 => msg3*100;
console.log(AF3(21)); 

/* Callback Function */
const CF = functionName=>functionName();
CF(()=>console.log('CFFFFF'));

/* 2 **** */
function CF2(variable206,function206)
{function206(variable206);}
function wel(who)
{console.log(`${who},welcome!`);}
CF2('a27',wel);

/* setTimeout */
const a213=()=>console.log('hi');
setTimeout(a213,500);
const a215=(a)=>console.log(a+67); /* why cant */
setTimeout(a215(400),2000)
let a217 = 400;
const a218=()=>console.log(a217+1);
setTimeout(a218,2000)

/* Array callback function */
let array219=['a','b','c','d'];
/* array219.forEach((a)=>console.log(a)); /*forEach only for Array*/
/* console.log(array219) */ 
array219.forEach(function(b){console.log(b)});
console.log(array219)
let ar227=['e','f','g','h']
for(let a227=0 ;a227<=ar227.length-1;a227++)
console.log(ar227[a227])



/* Object key叫property function叫method*/
const user ={
    name            : 'joe',
    username        : 'joeC',
    area            : 'hk',
    age             : 24,
    Male            : true,
    description     : ['1233213',
                   '4546456',],
    login           : function(){console.log('login!!');},
    logout(){console.log('logout!!');},
    listage         : function(){console.log(this.age)},
    listarea(){console.log(this.area)}
/* object method 可以簡短^ */
}
console.log(user);
console.log(user['age']); 
const a240 ='area';
console.log(user.a240); /* 會undefined */
console.log(user[a240]);
user.age = 300;
console.log(user.age);
console.log(user['age']);
user.login();
user.listage(); /* 236唔this/user會出error(is not definded) */
console.log(this);
/* Oject入面function唔可以用arrow function 會變window做主體 */

var a254 = 'a';
function x() {
    var a254 = 'b';
    console.log(this.a254);
    var a254 = 'b';
    console.log(a254);
}
x()

/* document.querySelector */
const firstptag = document.querySelector('p');
console.log(firstptag)

const greeting = {
    words: 'Hello',
    number: 'five',
};
console.log(greeting)
console.log(typeof(greeting))
greeting.message = 'say Hello instead';
console.log(greeting)

let a29=0;
while (a29<=5)
{console.log(a29++)};
