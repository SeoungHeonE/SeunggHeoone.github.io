// 이 함수는 "scrollToNextSection()"로 호출하고
function scrollToNextSection() {
  // "section2" 변수는 id가 "section2"인 요소를 선택합니다.
  const section2 = document.querySelector('#Team');
  
  // 스무스한 애니메이션 효과
  section2.scrollIntoView({ behavior: 'smooth' });
  }