// 팝업 열기
function popOpen(name, target) {
    console.log(target)
    const popupName = `#${name}`;
    const popTarget = document.querySelector(popupName);
    popTarget.classList.add('popupOpen');
    document.querySelectorAll('.returnFocus').forEach(el => el.classList.remove('returnFocus'))
    target.classList.add('returnFocus');
    const popCloseBtn = popTarget.querySelector('.popup__close');
    popCloseBtn?.focus();
}

// 팝업 닫기
function popClose(name) {
    const popupName = `#${name}`;
    const popupTarget = document.querySelector(popupName);
    popupTarget.classList.remove('popupOpen');
    document.querySelector('.returnFocus')?.focus();
    let input = document.querySelectorAll('.popup input');
    if(input){
        input.forEach((el)=> {
            el.value = null;
            console.log(el);
        })
    }
}
