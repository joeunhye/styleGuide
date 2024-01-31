let nowZoom = 100;
let zoomControl  = {
	zoomOut : function(){
		nowZoom = nowZoom - 5;
		if(nowZoom < 90) {
			alert("더 이상 축소할 수 없습니다.");  
			nowZoom = 90;
		}
		if(nowZoom <= 90) nowZoom = 90;
		zoomControl.zooms();
        document.querySelector('.zoom-text > button').innerText = nowZoom+'%'
	},
	zoomIn : function(){
		nowZoom = nowZoom + 5;
		if(nowZoom > 120) {
			alert("더 이상 확대할 수 없습니다.");
			nowZoom = 120;
		}
		if(nowZoom >= 120) nowZoom = 120; 
		zoomControl.zooms();
        document.querySelector('.zoom-text > button').innerText = nowZoom+'%'
	},
	zoomReset : function(){
		nowZoom = 100;
		zoomControl.zooms();
        document.querySelector('.zoom-text > button').innerText = nowZoom+'%'
	},
	zooms : function(){
		let aUserAgent = navigator.userAgent.toLowerCase();
		
		if (aUserAgent.indexOf("firefox") >= 0){
            var body = document.querySelector('body');
                body.style.transform = 'scale('+nowZoom+'%)';
                body.style.transformOrigin = '0 0'
		} else {
			document.body.style.zoom = nowZoom + "%";
		}
	}
}