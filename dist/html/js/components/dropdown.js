function dropDownToggle(){
    const dropDownToggleBtns = document.querySelectorAll('.dropdown-toggle');
    const dropDownToggleWraps = document.querySelectorAll('.dropdown-toggle-group');

    dropDownToggleBtns.forEach((dropDownToggleBtn) => {
        dropDownToggleBtn.addEventListener('click', function(){
            const dropDownWrap = dropDownToggleBtn.parentElement;
            dropDownWrap.classList.toggle('on');
        })
    })
    // 드롭다운 토글 그룹 외부 클릭 시 드롭다운 메뉴를 닫습니다
    document.addEventListener('mouseup', function(e){
        let target = e.target;
        if(!document.querySelector('.dropdown-toggle-group').contains(target)){
            dropDownToggleWraps.forEach((dropDownToggleWrap)=> {
                dropDownToggleWrap.classList.remove('on')
            })
        }
    })
}