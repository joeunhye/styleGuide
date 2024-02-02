// 공통 함수 - 아코디언 상태 변경
function toggleAccordion(target, skip) {
    if (target.classList.contains('active')) {
        target.classList.remove('active');
        skip.textContent = '열기';
    } else {
        target.classList.add('active');
        skip.textContent = '닫기';
    }
}

// 아코디언 중복
function accordionSeveral() {
    const accordion = document.querySelectorAll('.accordion-several .title');

    if (accordion) {
        accordion.forEach((el) => {
            el.addEventListener('click', function (e) {
                const accordionItem = el.parentElement;
                const skipText = el.querySelector('.visually-hidden');
                toggleAccordion(accordionItem, skipText);
            });
        });
    }
}

// 아코디언 하나씩만
function accordionBasic() {
    const accordion = document.querySelectorAll('.accordion-basic .title');
    const accordionItems = document.querySelectorAll('.accordion-basic .item');

    if (accordion) {
        accordion.forEach((el) => {
            el.addEventListener('click', function (e) {
                e.stopPropagation()
                const accordionItem = el.parentElement;
                const skipText = el.querySelector('.visually-hidden');
        
                if (!accordionItem.classList.contains('active')) {
                    accordionItems.forEach((item) => {
                        item.classList.remove('active');
                        item.querySelector('.visually-hidden').textContent = '열기';
                    });
                } 
                accordionItem.classList.toggle('active');
                skipText.textContent = '닫기';
            });
        });
    }
}

// 아코디언 슬라이드 다운
function accordionSlide() {
const accordion = document.querySelectorAll('.accordion-slide .title');

    if (accordion) {
        accordion.forEach((el) => {
            el.addEventListener('click', function (e) {
                const accordionItem = el.parentElement;
                const skipText = el.querySelector('.visually-hidden');
                const contents = el.nextElementSibling;

                slideToggle(contents, 500, 'active');
                toggleAccordion(accordionItem, skipText);
            });
        });
    }
}

// 슬라이드 업, 다운
let slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};
let slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;

    if (display === 'none') display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
};

function slideToggle (target, duration, classList) {
    if (window.getComputedStyle(target).display === 'none' && !target.classList.contains(classList)) {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
};