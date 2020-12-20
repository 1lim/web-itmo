// $(document).ready(function(){
	let rowsNum = 0, colsNum = 0;
	$('#createTableButton').click(function(){
		rowsNum = +$('.rows').val();
		colsNum = +$('.cols').val();
		let table = $('<table id="table"/>');
		$('#creationForm').slideUp();
		$('#functionForm').slideDown();
		
		for (let i = 0; i < rowsNum; i++){
			let row = $('<tr/>');

			for (let j = 0; j < colsNum; j++){
				let cell = $('<td/>');
				cell.html('<textarea style="resize: none" cols="20" rows="2"></textarea><i class="fa fa-save"></i>');
				row.append(cell);
			}
			table.append(row);
		}
		// $('body').append(table);

		table.appendTo('body');
	});
	
	// $('.fa-save').live("click", function(){
		
	// });
	$(document).on('click', '.fa-save', function(){
		let textareaValue = $(this).parent('td').children('textarea').val();
		$(this).parent('td').text(textareaValue);
		$(this).parent('td').children('textarea').css('display', 'none');
		$(this).css('display', 'none');
		// alert(textareaValue);
	});



	$('#resetButton').click(function(){
		$('#creationForm').slideDown();
		$('#functionForm').slideUp();
		$('#table').remove();
	});

	//---------------------------------------------
	$('#addCaption').click(function(){
		$('#table').children('caption').remove();
		let userCaption = $(this).parent('td').children('input').val();
		let caption = $('<caption>'+ userCaption + '</caption>')
		$('#table').prepend(caption);
	});
	//---------------------------------------------
	$('#deleteRow').click(function(){
		let rowToDelete = $('#rowToDelete').val();
		if (rowToDelete > $('#table tr').length) {
			alert('Такой строки нет');
		} else {
			$('#table tr')[rowToDelete - 1].remove();
			rowsNum--;
		}
	});
	//---------------------------------------------
	$('#widthAndLineButton').click(function(){
		let tableWidth = $('#tableWidth').val();
		let lineType = $('#lineType option:selected').text();
		$('#table').css({
			'width' : tableWidth,
			'border' : '2px ' + lineType + ' white'}
		);
	});
	//----------------------------------------------
	function randomInteger(min, max) {
		let rand = min - 0.5 + Math.random() * (max - min + 1);
		return Math.round(rand);
	}
	function randomColor(){
		var color = Math.floor(Math.random() * 16777216).toString(16);
		return '#' + color;
	}
	//----------------------------------------------
	$('#magicButton').click(function(){

		let magicRow = randomInteger(1, rowsNum);
		let magicCol = randomInteger(1, colsNum);

		let bgColor = randomColor();
		let textColor = randomColor();
		let fontSize = randomInteger(15,25);

		magicRowArray = $('#table').children('tr').toArray();
		magicColArray = magicRowArray[magicRow-1].children;

		let magicCell = magicColArray[magicCol-1];

		let action = randomInteger(1,10);
		if (action < 6) {
			$(magicCell).css({
				'background' : bgColor,
				'color' : textColor,
				'font-size' : fontSize,
			});
		} else {
			$(magicCell).text('');
			$(magicCell).html('<textarea style="resize: none" cols="20" rows="2"></textarea><i class="fa fa-save"></i>');
		}
		
	});


// });