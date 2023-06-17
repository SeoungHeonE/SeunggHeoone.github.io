window.addEventListener('scroll', function() {
    var introText = document.querySelector('#Team .introductionText');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    var slider = document.querySelector('.slider');

    if (introPosition < screenPosition / 4) {
        introText.style.opacity = '0';
        introText.style.transition = 'opacity 1s';
        showSlider(); // 슬라이더 표시 함수 호출
    } else {
        introText.style.opacity = '1';
        introText.style.transition = 'opacity 1s';
        hideSlider(); // 슬라이더 숨기기 함수 호출
    }
});

function showSlider() {
    var slider = document.querySelector('.slider');
    slider.style.opacity = '1';
    slider.style.visibility = 'visible';
    slider.style.transition = 'opacity 1s';
}

function hideSlider() {
    var slider = document.querySelector('.slider');
    slider.style.opacity = '0';
    slider.style.visibility = 'hidden';
    slider.style.transition = 'opacity 1s';

    var slider = document.querySelector('.slider');
    slider.style.opacity = '0';
    slider.style.visibility = 'visible';
    slider.style.transition = 'opacity 1s';
}
