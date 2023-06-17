// 이미지 파일 이름이 0.jpg부터 1959.jpg까지 순서대로 저장된 경로를 가정합니다.
const imagePath = './scrollimg/Flare';

// 캔버스 요소를 가져옴.
const canvas = document.querySelector('.canvas2');
const ctx = canvas.getContext('2d');

// 이미지 프리로딩을 위한 배열을 생성.
const images = [];

// 이미지 프리로딩 함수를 정의.
// function preloadImages() {
//   for (let i = 0; i < 1960; i++) {
//     const image = new Image();
//     image.src = imagePath + i + '.jpg';
//     images.push(image);
//   }
// }

// 이미지 프리로딩 함수를 정의.
function preloadImages() {
    // 이미지 경로와 확장자, 이미지의 총 개수를 설정.
    const imagePath = './scrollimg/Flare'; // 이미지 파일이 저장된 경로
    const imageExtension = '.jpg'; // 이미지 파일의 확장자
    const totalImages = 1000; // 이미지의 총 개수

// 이미지를 순서대로 프리로드 함.
for (let i = 0; i < totalImages; i++) {
    const image = new Image();
    const imageIndex = String(i).padStart(4, '0'); // 이미지 인덱스를 4자리로 맞추고
    image.src = `${imagePath}${imageIndex}${imageExtension}`; // 이미지 경로를 설정
    images.push(image); // 프리로드된 이미지를 배열에 추가
    }
}

// 이미지를 그리는 함수를 정의
function drawImage(index) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 초기화
    ctx.drawImage(images[index], 0, 0); // 지정된 인덱스의 이미지를 캔버스에 그림
}

// 스크롤 이벤트 핸들러를 정의
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // 스크롤 위치를 가져오고
    const imageIndex = Math.floor(scrollTop / 10) % 1000; // 스크롤 위치에 따라 이미지 인덱스 계산
    drawImage(imageIndex); // 계산된 이미지 인덱스로 이미지를 그림
}

// 이미지 프리로딩 함수를 호출
preloadImages();

// 스크롤 이벤트를 등록
window.addEventListener('scroll', handleScroll);






/////////////////////////////////////////////////////////////////
/////////////////////  텍스트 페이드인/아웃  /////////////////////
////////////////////////////////////////////////////////////////

const explanation = document.querySelector('.explanation');
const section = document.querySelector('#festival_explanation');
const sectionHeight = section.offsetHeight; // 섹션의 높이를 가져옴.
const windowHeight = window.innerHeight; // 브라우저 창의 높이를 가져옴.

let isScrollingUp = false; // 위로 스크롤 중인지 여부를 저장하는 변수.

function fadeOutExplanation() {
    // 섹션의 위치 정보를 가져옴.
    const rect = section.getBoundingClientRect(); 
    const sectionBottom = rect.top + sectionHeight; // 섹션의 하단 위치를 계산.

    // 섹션 하단이 브라우저 창 안에 들어오고 위로 스크롤 중이 아닌 경우
    if (sectionBottom <= windowHeight && !isScrollingUp) {
        // 페이드 아웃을 위한 클래스를 추가함.
        explanation.classList.add('fade-out'); 
        // 페이드 인을 위한 클래스를 제거함.
        explanation.classList.remove('fade-in'); 
    } else {
        // 페이드 아웃을 위한 클래스를 제거함.
        explanation.classList.remove('fade-out'); 
        // 페이드 인을 위한 클래스를 추가함.
        explanation.classList.add('fade-in'); 
    }
}

function handle() {
  const scrollY = window.scrollY; // 스크롤 위치를 가져옴.

    // 스크롤 위치가 0보다 큰 경우 (스크롤이 발생한 경우)
    if (scrollY > 0) {
        // 스크롤이 위로 발생한지 여부를 저장합니다.
        isScrollingUp = scrollY < lastScrollY; 
}

    // 이전 스크롤 위치를 저장함.
    lastScrollY = scrollY;

    // 텍스트 페이드 인/아웃 처리.
    fadeOutExplanation();
}

let lastScrollY = 0;
fadeOutExplanation(); // 텍스트 페이드 인/아웃 상태를 설정.

// 스크롤 이벤트 리스너 등록
window.addEventListener('scroll', handle);










