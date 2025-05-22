$(function(){
	window.addEventListener("orientationchange",onOrientationchange ,false);
	function onOrientationchange() {
		// if (window.orientation === 180 || window.orientation === 0) {
		// 	/*orientation: portrait 直式*/
		// 	$("#orientation").hide();
		// }
		// if (window.orientation === 90 || window.orientation === -90 ){
		// 	/*orientation: landscape 橫式*/
		// 	$("#orientation").show();
		// }

		// MEMO: window.orientation 已經被淘汰使用，取而代之的是 window.screen.orientation.type，一樣可以縮減不寫 window
		// 直向
		if (screen.orientation.type === "portrait-primary" ||
				screen.orientation.type === "portrait-secondary"
		) {
			$("#orientation").hide();
		}

		// 橫向
		if (screen.orientation.type === "landscape-primary" ||
				screen.orientation.type === "landscape-secondary"
		) {
			$("#orientation").show();
		}
	}
})