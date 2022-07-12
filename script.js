//profile display
const profile = document.getElementById('profile');
const profile_card = document.querySelector('.profile-info');

//search function
const search = document.getElementById('search-icon');
search.addEventListener('click',()=>{
	document.querySelector('.search-bar').classList.toggle('show');
});
profile.addEventListener('click',()=>{
	profile_card.classList.toggle('show');
});
// colorChange
function DarkLight(){
	document.body.classList.toggle('dark-mode');
}
// slider
var si=1;
DisplaySlides(si);
function nextSlide(n){
	DisplaySlides(si+=n);
}
function currentSlide(n){
	DisplaySlides(si=n);
}
function DisplaySlides(n){
	var i;
	var slides = document.getElementsByClassName('slideshow');
	var dots = document.getElementsByClassName('dot');

	if(n>slides.length){
		si = 1;
	}
	if(n<1){
		si = slides.length;
	}
	for(i=0;i<slides.length;i++){
		slides[i].style.display = 'none';
	}
	for(i=0;i<dots.length;i++){
		dots[i].className = dots[i].className.replace('active','');
	}
	slides[si-1].style.display = 'block';
	dots[si-1].style.className += 'active';
}
// Auto Slide
		var slideIndex = 0;
		showSlides();
		function showSlides(){
			var i;
			var slides=document.getElementsByClassName('slideshow');
			var dots=document.getElementsByClassName('dot');
			for (i = 0;i<slides.length;i++) {
				slides[i].style.display='none';
			}
			slideIndex++;
			if(slideIndex>slides.length){slideIndex=1}
			slides[slideIndex-1].style.display='block';
			dots[slideIndex-1].style.background = '#ccc';
		setTimeout(showSlides,3000);
		}
	//View notifications
	function ViewAll(){
		const view = document.querySelector('#viewnotif');
		view.style.display ="block";
	}
// Quotes-section
let Qarray = [
{
	q:'Work hard,have fun,make history.',
	a:'Jeff Bezos'
},
{
	q:'Out of the mountain of despair, a stone of hope.',
	a:'Martin Luther king'
},
{
	q:'Nothing impossible.The word itelf says Im possible.',
	a:'audrey Hepburn'
},
{
	q:'You define your own life. Dont let other people write your script.',
	a:'Oprah Winfrey'
},
{
	q:'There is no greater power in heaven or on the earth than the commitment to a dream.',
	a:'Abdil kalam'
},
{ 
	q:'Discipline is the bridge between goals and accomplishments',
	a:'Abdil kalam'
},
{ 
	q:'The smallest of disciplines, practiced every day, start an incredible process that can change our lives forever.',
	a:'Jim Rohn'
}
];

var i=0;
function ChangeQuote(){
	var quote=document.getElementById('quote');
	var author=document.querySelector('.author');
	quote.innerHTML=Qarray[i].q;
	author.innerHTML=Qarray[i].a;
	i++;
	if(i>=Qarray.length){
		i=0;
	}
}
setInterval(ChangeQuote,8000);
// form contaienr
// var formbx=document.getElementById('formbox');
// var blur=document.getElementById('blur');
// var exam=document.getElementsByClassName('exam')
// exam.addEventListener('click',()=>{
// 	alert('jfhj');
// 	blur.classList.add('blureff');
// 	document.getElementById('formbox').display='block';
	
// })
let exam = document.querySelector('.exam');
let homepage=document.querySelector('.homepage');
let regform = document.querySelector('.form-container');
exam.addEventListener('click',()=>{
	homepage.classList.toggle('blur');
	regform.classList.toggle('popbox');
});
// swiper
var swiper = new Swiper(".card_slider", {
        slidesPerView: 3,
        nextButton:'.arrow-left',
        prevButton:'.arrow-right',
        spaceBetween:15,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
