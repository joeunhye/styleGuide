function topBtnScrollEvent(){
    const topBtn = document.querySelector('.top-btn');
    topBtn?.addEventListener('click', function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}