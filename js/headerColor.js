
const headerWrap = document.getElementById('header-Wrap');
const navLinks = document.querySelectorAll('#nav-menu li a');

headerWrap.addEventListener('mouseover', () => {
  headerWrap.style.background = '#fff';
  navLinks.forEach(link => {
    link.style.color = '#000000';
  });
});

headerWrap.addEventListener('mouseout', () => {
  headerWrap.style.background = '';
  navLinks.forEach(link => {
    link.style.color = '';
  });
});


/////////////////스크롤 이벤트/////////////////

// window.addEventListener("scroll", function(){
//   if(window.scrollY > 100){
//     headerWrap.style.top = -100 + "px";

//   } else {
//     headerWrap.style.top = 45 + "px";
//   }
// });



// header smooth
// 페이지가 로드되면 실행되는 함수.
document.addEventListener("DOMContentLoaded",function(){

  // 스크롤 이벤트 처리
  window.onscroll = function(){
      // 페이지의 스크롤 위치가 100px보다 큰 경우
      if(document.querySelector("html").scrollTop > 100){
          // 헤더를 위로 숨기고
          document.querySelector("#header-Wrap").style.top = "-80px";
      } else {
          // 헤더를 나타냄
          document.querySelector("#header-Wrap").style.top = "45px";
      }
  }

  // 마우스 이벤트 처리 (마우스 움직임)
  window.onmousemove = function(event){
      // console.log(event.clientY);

      // 마우스의 y 좌표값이 100보다 작은 경우
      if(event.clientY < 100){
          // 헤더를 나타내고
          document.querySelector("#header-Wrap").style.top = "45px";
      } else {
          // 헤더를 위로 숨김.
          document.querySelector("#header-Wrap").style.top = "-80px";
      }
  }
});


// document.addEventListener("DOMContentLoaded", function(){}) 
// DOMContentLoaded 이벤트가 발생했을 때 실행되는 함수를 등록합니다. 
// HTML 문서의 구성이 완료되었을 때 해당 함수 안에 작성된 코드가 실행된다는 것. 
// 이를 통해 초기화 작업이나 이벤트 핸들러 등을 정의할 수 있음.

// window.onscroll
// 창이 스크롤될 때 발생하는 이벤트이며, 이벤트가 발생하면 등록된 함수가 실행됨.

// document.querySelector("html").scrollTop
// 페이지의 스크롤 위치를 나타내는 속성. scrollTop 속성은 브라우저 창의 맨 위에서부터 현재 페이지의 상단까지의 거리

// window.onmousemove
// 이벤트 핸들러를 등록하여 마우스 움직임에 따른 동작을 처리.
// 마우스 이벤트 핸들러 함수 내부에서는 마우스 이벤트 객체를 event로 받아오고,
// event.clientY는 마우스 커서의 현재 Y 좌표값을 나타냄.