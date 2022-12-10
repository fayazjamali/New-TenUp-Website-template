$(function() {

	"use strict";


	$(document).ready(function(){

		// preloader 
		setTimeout(function(){
			$('.preloader').fadeOut();
		}, 500);
		
		// menu toggle btn 
		$('.btn-menu').click(function(){
			$('.fixed-menu').addClass('open');
		});

		$('.btn-close').click(function(){
			$('.fixed-menu').removeClass('open');
		});

		$(window).resize(function(){
			var ww = $(window).width();
			if(ww > 1200) {
				$('.fixed-menu').removeClass('open');
			}
		});

		$('.menu__link').on('click', function(event) {
				   
			var target = $(this.getAttribute('href'));
			if( target.length ) {
				event.preventDefault();

				$('html, body').stop().animate({
					scrollTop: target.offset().top - 90
				}, 1000);


			} 
			
		});
		
		$('.mob-menu__link').on('click', function(event) {
			var target = $(this.getAttribute('href'));
			if( target.length ) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 90
				}, 1000);
				$('.fixed-menu').removeClass('open');
			}
		});

		$(".news-carousel").owlCarousel({
			items: 3,
			margin: 30,
			dots: true,
			responsive : {
				0 : {
					items: 1,
				},
				768 : {
					items: 2,
				},
				992 : {
					items: 3,
				}
			}
		});

		$('.accordion > li:eq(0) a').addClass('active').next().slideDown();

		$('.accordion a').click(function(j) {
			var dropDown = $(this).closest('li').find('p');

			$(this).closest('.accordion').find('p').not(dropDown).slideUp();

			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
			} else {
				$(this).closest('.accordion').find('a.active').removeClass('active');
				$(this).addClass('active');
			}

			dropDown.stop(false, true).slideToggle();

			j.preventDefault();
		});


		// check inputs
		$(".form__input, .form__textarea").focus(function(){
			$(this).addClass("in");
		});
		$(".form__input, .form__textarea").focusout(function(){
			if($.trim($(this).val()) == ''){
		      $(this).removeClass('in')
		   } 
		});
		
		// form validation
        $("#contact-form").validate({
			rules: {
				 Email: {
					  required: true,
				 },
			},
			messages: {
				Email: {
				 required: "",
			   },
			 },
			submitHandler: function (form) {
				$.ajax({
					type: "POST",
					url: "/mail.php",
					data: $(form).serialize(),
					success: function () {
					  alert('Message sent');
					}
				});
				return false; // required to block normal submit since you used ajax
			}
		});

		$("#subscribe-form").validate({
			rules: {
				subscribe_email: {
					  required: true,
				 },
			},
			messages: {
				subscribe_email: {
				 required: "",
			   },
			 },
			submitHandler: function (form) {
				$.ajax({
					type: "POST",
					url: "/mail.php",
					data: $(form).serialize(),
					success: function () {
					  alert('Message sent');
					}
				});
				return false; // required to block normal submit since you used ajax
			}
		});

		AOS.init({
			disable: 'mobile',
			duration: 1000,
			once: true
		});

		var ctx = document.getElementById("myChart");
		var myChart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: ["Presale", "Liquidity", "Staking", "Swap", "Team", "Initial Burn", "Marketing", "Airdrops"],
				datasets: [{
					label: 'Tokenomics',
					data: [20,20,20,15,10,5,5,5],
					borderWidth: 0,
					backgroundColor: [
						'#77c0f6',
						'#6f50fd',
						'#f3d667',
						'#f9778a',
						'#55daa7',
						'#b1f977',
						'#ea77f9',
						'#f97777'
					],
					
				}]
			},
			options: {
				legend: {
					display: false
				}
			}
		});

		$('.popup-youtube').magnificPopup({
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});

		$('.select').each(function(){
			var $this = $(this), numberOfOptions = $(this).children('option').length;
		  
			$this.addClass('select-hidden'); 
			$this.wrap('<div class="select"></div>');
			$this.after('<div class="select-styled"></div>');

			var $styledSelect = $this.next('div.select-styled');
			$styledSelect.text($this.children('option').eq(0).text());
		  
			var $list = $('<ul />', {
				'class': 'select-options'
			}).insertAfter($styledSelect);
		  
			for (var i = 0; i < numberOfOptions; i++) {
				$('<li />', {
					text: $this.children('option').eq(i).text(),
					rel: $this.children('option').eq(i).val()
				}).appendTo($list);
			}
		  
			var $listItems = $list.children('li');
		  
			$styledSelect.click(function(e) {
				e.stopPropagation();
				$('div.select-styled.active').not(this).each(function(){
					$(this).removeClass('active').next('ul.select-options').hide();
				});
				$(this).toggleClass('active').next('ul.select-options').fadeToggle();
			});
		  
			$listItems.click(function(e) {
				e.stopPropagation();
				$styledSelect.text($(this).text()).removeClass('active');
				$this.val($(this).attr('rel'));
				$list.fadeOut();
				//console.log($this.val());
			});
		  
			$(document).click(function() {
				$styledSelect.removeClass('active');
				$list.fadeOut();
			});
		 
		});

	});

});

var $window = $(window);

$window.on('scroll', function () {
	if ($window.scrollTop() > 1) {
		$('.header').addClass('sticky');
	} else {
		$('.header').removeClass('sticky');
	}
});