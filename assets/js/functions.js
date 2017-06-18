// load functions when document is ready
$( document ).ready(function() {
	$('.category-nav>li').hover(function() {
		$(this).find(".mega-menu-show").show();
	}, function() {
		$(this).find(".mega-menu-show").hide();
	});
});