let menuBtn = document.querySelector('.header_burger');
let menu = document.querySelector('nav');
let header = document.querySelector('header');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
    header.classList.toggle('new_header');
});

$('.header_burger').click(function(){
  $('header_burger').removeClass('closed');
});