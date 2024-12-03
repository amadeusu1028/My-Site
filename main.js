'use strict';

console.log(innerWidth);

{
  document.querySelector('.label').addEventListener('click',() =>{
    document.querySelector('.detail').classList.toggle('open');
    document.querySelector('.label').classList.toggle('open');
  });
}

{
  document.querySelector('.label2').addEventListener('click',() =>{
    document.querySelector('.detail2').classList.toggle('open');
    document.querySelector('.label2').classList.toggle('open');
  });
}

{
  document.querySelector('.label3').addEventListener('click',() =>{
    document.querySelector('.detail3').classList.toggle('open');
    document.querySelector('.label3').classList.toggle('open');
  });
}

$(function(){
  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
})