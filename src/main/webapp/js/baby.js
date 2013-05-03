function item_masonry() {
	$('.items').masonry({
		itemSelector : '.masonry_brick',
		gutterWidth : 17
	});

	$("img.lazy").lazyload({
		effect : "fadeIn"
	});

	fusion2.canvas.setHeight({
		height : 0
	});
}

function goto(url){fusion2.nav.open({url : url})}