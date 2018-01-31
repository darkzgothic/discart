import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import MobileMenu from './modules/MobileMenu';
import ImageSlider from './modules/ImageSlider';
import $ from 'jquery';

new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".feedback"), "85%");
var stickyHeader = new StickyHeader;
var mobileMenu = new MobileMenu;
var imageSlider = new ImageSlider;

console.log("hiiiii");

		$("#slideshow > div:gt(0)").hide();

		setInterval(function() {
		  $('#slideshow > div:first')
		    .fadeOut(1000)
		    .next()
		    .fadeIn(1000)
		    .end()
		    .appendTo('#slideshow');
		}, 3000);

console.log("done");