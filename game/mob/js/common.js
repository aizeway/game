
$(window).ready(function() {
	$(".main").append("<div id='overlay'></div>");
	$("#menu").on("tap", function() {
		$("#menuNav").slideToggle("fast");
		$("#overlay").toggleClass("show");
	})
	$(".text").focus(function() {
		var txt_value = $(this).val();
		if(txt_value == this.defaultValue) {
			$(this).val("").css("color", "#313131");
		}
	});
})

function fjcHeight() {
	$(".proportion").each(function(i, n) {
		var FjcHeight = $(this).attr("F");
		var nowWidth = $(this).width();
		var thisHeight = nowWidth * parseFloat(FjcHeight);
		$(this).css("height", thisHeight + "px");
	});
}

function fontSizeHack() {
	var viewportW = $(".main").width();
	var fz = (viewportW / 320) * 0.625;
	$(".index-banner").css("font-size", (fz * 100) + "%");
}

$(window).resize(function() {
	fjcHeight();
	fontSizeHack();
})
$('.menu_dd').eq(0).siblings('.menu_dd').css("display", 'none');
$("#menuNav>dt>p").on("tap", function() {
	$(this).addClass("actblue").siblings().removeClass("actblue");
	$('.menu_dd').eq($(this).index()).css("display", "block").siblings('.menu_dd').css("display", 'none');
})
var show = 'none';
$(".search").on("tap", function() {
	show = show == 'none' ? 'block' : 'none';
	var hide = show == 'none' ? 'block' : 'none';
	$(".searchDiv").css("display", show);
	$(".logo").css("display", hide);
	$(this).css("display", hide);
	$(".searchSpan").css("display", show);
})
$(".searchSpan").on("tap", function() {
	show = show == 'none' ? 'block' : 'none';
	var hide = show == 'none' ? 'block' : 'none';
	$(".searchDiv").css("display", show);
	$(".logo").css("display", hide);
	$(this).css("display", show);
	$(".search").css("display", hide);
})