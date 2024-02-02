// 상세검색 필터
const detailSearchBtn = document.querySelectorAll('.search__btn-detail');
const detailSearchBox = document.querySelectorAll('.detail-search-box');
const detailSearchClose = document.querySelectorAll('.detail-search-close');


if (detailSearchBtn) {
    detailSearchBtn.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            const detailBox = this.parentElement.nextElementSibling;

            // 모든 .detail-search-box 요소의 'show' 클래스를 제거
            // 현재 클릭한 버튼의 다음 요소에 'show' 클래스를 토글
            detailSearchBox.forEach((box) => {
                if (box !== detailBox) {
                    box.classList.remove('show');
                }

                detailClose(box)
            });

            detailBox.classList.toggle('show');

            e.stopPropagation(); // 클릭 이벤트 전파 중단
        });
    });

    // 드롭다운 토글 그룹 외부 클릭 시 드롭다운 메뉴를 닫기
    document.addEventListener('mouseup', function (e) {
        let target = e.target;
        let isOutsideClick = true;

        detailSearchBox.forEach((box) => {
            if (box.contains(target) || Array.from(detailSearchBtn).some(btn => btn.contains(target))) {
                isOutsideClick = false;
            }
        });

        if (isOutsideClick) {
            detailSearchBox.forEach((box) => {
                box.classList.remove('show');
            });
        }
    });

    function detailClose(searchBox){
        detailSearchClose.forEach((closeBtn)=> {
            closeBtn.addEventListener("click", function(){
                searchBox.classList.remove('show')
            })
        })
    }
}