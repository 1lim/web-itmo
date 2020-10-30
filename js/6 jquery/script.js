$(document).ready(function(){
// 1 Изменить css ссылок и параграфов
	$('body').css('background', '#323234').css('padding', '20px');
	$('a.link').css({
		'font-family':'Open Sans',
		'text-decoration':'none',
		'color': 'white',
		'padding': '10px'});
	$('.paragraph').css({
		'padding-left':'10px',
		'color':'white',
		'font-family':'Open Sans',
	});

//2 Написать функцию для установки всех элементов формы в disabled
	disableForm();
	function disableForm(){
		$('input, select').prop('disabled', 'true');
	};
	// enableForm();
	// function enableForm(){
	// 	$('input, select').removeAttr('disabled');
	// };

//3 Добавить стрелку перед ссылками
	$('a').prepend('<i class="fa fa-location-arrow fa-inverse"></i>');
//  Все ссылки открывать в новом окне
	$('a').prop('target', '_blank');
//  Изменить http на https
	function toHttps(){
		$('a[href^="http:"]').each(function(){
			this.href = this.href.replace("http:", "https:");
		});
	}
	function toHttp(){
		$('a[href^="https:"]').each(function(){
			this.href = this.href.replace("https:", "http:");
		});
	}
//  Добавить кнопку для изменения предыдущих пунктов
	$('body').prepend('<div class="toggleHttp">toggle</div>');
	$('.toggleHttp').css({
		'font-family':'Open Sans',
		'background':'white',
		'width':'60px',
		// 'height':'30px',
		'text-align':'center',
		'padding':'7px',
		'border-radius':'3px',
		'position':'fixed',
		'top':'10px',
		'right':'10px',
		'cursor': 'pointer',
	}).click(function(){
		if ($('a').prop('target') == ('_blank')) {
			$('a').prop('target', '_self');
		} else {
			$('a').prop('target', '_blank');
		}
		$('.acontainer i').toggle();
		if ($('a').attr('href')[4] == ':') {
			toHttps();
		} else {
			toHttp();
		}
	});

//4 Таблица с анимациями
	$('.fadeToggle').click(function(){
		$('.fa-bicycle').fadeToggle();
	});
	$('.toggle').click(function(){
		$('.fa-bug').toggle();
	});
	$('.slideToggle').click(function(){
		$('.fa-tachometer').slideToggle();
	});
	$('.slideUp').click(function(){
		$('.fa-bath').slideUp();

	});
	$('.fadeOut').click(function(){
		$('.fa-bomb').fadeOut();
	});
//5 Ajax Запросы
	$('.ajaxbutton').click(function(){
		$('.result').load('https://inxaoc.github.io/example/ajax-1.html', whiteColor);
		// $('.result').load('https://inxaoc.github.io/example/ajax.json', {'key' : 'value'});
	});
	function whiteColor(){
		$(this).css({
			'color':'white',
			'font-family': 'Open Sans',
		});
	}

});
