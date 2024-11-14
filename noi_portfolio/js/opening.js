$(function () {
	var opAnime = function () {
		if (sessionStorage.getItem('access')) { //2回目以降アクセス時の処理
			$(".start").css('display', 'none');
		} else { //初回アクセス時の処理
			sessionStorage.setItem('access', 'firstTime');
			setTimeout(function() {
				$('.start .1').fadeIn(1600);
			},500); //0.5秒後にフェードイン
			setTimeout(function() {
				$('.start .1').fadeOut(500);
			},3000); //3秒後フェードアウト
			setTimeout(function() {
				$('.start .2').fadeIn(1600);
			},3500); //3.5秒後にロゴをフェードイン
			setTimeout(function() {
				$('.start').fadeOut(500);
			},6000); //6秒後にフェードアウト
		}
	}
	opAnime();
});
