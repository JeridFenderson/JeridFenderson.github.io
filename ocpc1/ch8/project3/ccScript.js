/*Hands-on Project 8-3
Jerid Fenderson
08/31/2020*/

'use strict';
let ccAttempts = 1;

function selectCardType(){
	const CARDNUMVALUE = document.getElementById('ccNum').value
	const VISA = /^4[0-9]{12}(?:[0-9]{3})?$/;
	const MC = /^5[1-5][0-9]{14}$/;
	const DISCOVER = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
	const AMEX = /^3[47][0-9]{13}$/;

	switch (true){
		case VISA.test(CARDNUMVALUE):
			document.getElementById('visa').checked = 'checked';
			break;
		case MC.test(CARDNUMVALUE):
			document.getElementById('mc').checked = 'checked';
			break;
		case DISCOVER.test(CARDNUMVALUE):
			document.getElementById('discover').checked = 'checked';
			break;
		case AMEX.test(CARDNUMVALUE):
			document.getElementById('amex').checked = 'checked';
			break;
		default:
			alert('Please enter a valid card number');
			if (ccAttempts == 3){
				document.getElementById('ccNum').value = '';
				ccAttempts = 0;
			}
			return ccAttempts++;
			break;
	}
}

function createEventListeners(){
	const CARDNUM = document.getElementById('ccNum');
	CARDNUM.addEventListener('change', selectCardType, false);
}

window.addEventListener('load', createEventListeners, false);

