function gridView() {
    const $gridViewBtns = document.querySelectorAll('.grid-view-select li button');
    
    $gridViewBtns.forEach(($gridViewBtn) => {
        $gridViewBtn.addEventListener('click', function () {
            const $gridList = document.querySelector('.grid-list');
            if (this.classList.contains('on')) return;
            removeActive($gridViewBtns);
            this.classList.add('on');

            const btnData = this.getAttribute('data-grid');

            if(btnData == 'gridGallery') {
                $gridList.classList.remove('list-grid-vertical')
            } else {
                $gridList.classList.add('list-grid-vertical')
            }

            
            const $targetSkipEls = document.querySelectorAll('.visually-hidden');
            $targetSkipEls.forEach(($targetSkipEl) => $targetSkipEl.remove());
            accessibilityText($gridViewBtn);
        });
    });

    function removeActive(className) {
        className.forEach((item) => {
            item.classList.remove('on');
        });
    }
}
