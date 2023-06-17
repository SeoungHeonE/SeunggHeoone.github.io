// 네비게이션 메뉴의 링크를 클릭하면 스무스한 스크롤 발생
$(document).ready(function () {
    // 네비게이션 메뉴의 링크 클릭 이벤트를 처리.
    $("#nav-menu a").on("click", function (event) {
        // 클릭된 링크의 해시 값이 비어있지 않은 경우에만 실행함.
        if (this.hash !== "") {
            event.preventDefault(); // 링크 클릭에 대한 기본 동작을 중단하고
            var hash = this.hash; // 클릭된 링크의 해시 값을 가져옴.

            // 스크롤 애니메이션을 설정.
            $("html, body").animate({
                scrollTop: $(hash).offset().top // 해당 해시 값의 요소로 스크롤링함.
            }, 800, function () { // 0.8초 동안 스크롤 애니메이션을 실행
                window.location.hash = hash; // URL의 해시 값을 클릭된 링크의 해시 값으로 변경함.
            });
        }
    });
});


// if (this.hash !== "") 
// 클릭된 링크의 해시 값이 비어있는 경우 (#만 있는 경우), 스크롤 대상이 명확하지 않으므로 스크롤 애니메이션을 실행할 수 없음.
// 따라서, if (this.hash !== "") 조건문을 사용하여 클릭된 링크의 해시 값이 비어있지 않은 경우에만 스크롤 애니메이션을 실행하도록 설정한 것.


// event.preventDefault();
// <a> 태그의 기본 동작은 클릭 시 링크의 URL로 이동하는 것입니다. 하지만 해당 코드는 이 기본 동작을 막아서 링크를 클릭했을 때 URL로의 이동을 막고, 추가적인 스크롤 애니메이션을 적용할 수 있도록 합니다.


// var hash = this.hash; 
// this.hash는 현재 클릭된 링크의 해시 값을 나타내는 속성이며,
// 해시 값은 스크롤 애니메이션을 적용할 요소를 식별하는 데 사용됨.
// 예를 들면, <a href="#section1"></a>와 같은 링크를 클릭하면 hash 변수에는 "#section1"과 같은 해시 값이 할당된다는 것.


// $("html, body")
// $("html, body")는 <html> 요소와 <body> 요소를 선택하며, 이 코드는 스크롤 애니메이션을 적용할 요소를 선택하는 역할을함.


// scrollTop: $(hash).offset().top
// scrollTop: $(hash).offset().top은 선택한 요소를 스크롤링할 위치로 이동시킴. 
// $(hash).offset().top은 해당 요소로 스크롤링합니다.


// window.location.hash = hash
// window.location.hash = hash는 URL의 해시 값을 클릭된 링크의 해시 값으로 변경합니다.
// 이렇게하면 페이지를 다시 로드했을 때 클릭된 링크의 위치로 자동 스크롤될 수 있도록 하는 것.