/* 選取html元素 */
const comment= document.querySelector('#comment');
const submitButton=document.querySelector('button');
const commentCount=document.querySelector('#commentCount');
const commentDiv=document.querySelector('.comment');


submitButton.addEventListener('click',function(){
    console.log(comment.value); /* (.value)print個值出尼 */

    /* 留言  p tag */
    const newComment = document.createElement('p');
    newComment.innerText = '我:'+comment.value;
    newComment.classList.add('mine');

    /* 加入新留言 */
    commentDiv.append(newComment);

    /* cm數 */
    commentCount.innerText=commentDiv.childElementCount; /* 子元素數量 */

    comment.value=''; /* 清空留言格 */
     



})