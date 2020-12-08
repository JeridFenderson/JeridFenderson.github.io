/*JavaScript 6th Edition
  Chapter 6
  Hands-on Project 6-3

  Author: Jerid Fenderson
  Date:   8/17/2020

  Filename: validate.js*/

'use strict';

let formValidity = true;

//remove fallback placeholder text
function zeroPlaceholder(){
	const ADDRESSBOX = document.getElementById('addrinput');
	ADDRESSBOX.style.color = 'black';

	if(ADDRESSBOX.value == ADDRESSBOX.placeholder){
		ADDRESSBOX.value = '';
	}
}

//restore placeholder text if box contains no user entry
function checkPlaceholder(){
	const ADDRESSBOX = document.getElementById('addrinput');

	if(ADDRESSBOX.value == ''){
		ADDRESSBOX.style.color = 'rgb(178,184,183)';
		ADDRESSBOX.value = ADDRESSBOX.placeholder;
	}
}

//add placeholder text for browsers that don't support placeholder attribute
function generatePLaceholder(){
	if (!Modernizr.input.placeholder){
		const ADDRESSBOX = document.getElementById('addrinput');
		ADDRESSBOX.value = ADDRESSBOX.placeholder;
		ADDRESSBOX.style.color = 'rgb(178,184,183)';

		ADDRESSBOX.addEventListener('focus', zeroPlaceholder, false);
		ADDRESSBOX.addEventListener('blur', checkPlaceholder, false)
	}
}

//advance Ssn
function advanceSsn(){
	const SSNFIELDS = document.getElementsByClassName('ssn');
	const CURRENTFIELD = document.activeElement;

	if (CURRENTFIELD.value.length == CURRENTFIELD.maxLength){
		if (CURRENTFIELD == SSNFIELDS[0]){
			SSNFIELDS[1].focus();
		}

		if (CURRENTFIELD == SSNFIELDS[1]){
			SSNFIELDS[2].focus();
		}

		if (CURRENTFIELD == SSNFIELDS[2]){
			document.getElementById('submitBtn').focus();
		}
	}
}

//validate required fields
function validateRequired(){
	const INPUTELEMENTS = document.querySelectorAll(`#contactinfo input`);
	const ERRORDIV = document.getElementById(`errorText`);
	const ELEMENTCOUNT = INPUTELEMENTS.length;
	let requiredValidity = true;
	let currentElement;

	try{
		for(let i = 0; i < ELEMENTCOUNT; i++){
			//validate all input elements in fieldset
			currentElement = INPUTELEMENTS[i];

			if(currentElement.value == ''){
				currentElement.style.background = 'rgb(255,233,233)';
				requiredValidity = false;
			} else{
				currentElement.style.background = 'white';
			}
		}

		if (!requiredValidity){
			throw 'Please complete all fields';
		} 
		ERRORDIV.style.display = 'none';
		ERRORDIV.textContent = '';
	}

	catch (msg){
		ERRORDIV.style.display = 'block';
		ERRORDIV.textContent = msg;
		formValidity = false;
	}
}

//validate numbers fields
function validateNumbers(){
	const NUMBERINPUTS = document.querySelectorAll(`#contactinfo input[type=number]`);
	const ELEMENTCOUNT = NUMBERINPUTS.length;
	const NUMERRORDIV = document.getElementById(`numErrorText`);
	let numbersValidity = true;
	let currentElement;

	try{
		for (let i = 0; i < ELEMENTCOUNT; i++){
			currentElement = NUMBERINPUTS[i];

			if (isNaN(currentElement.value) || currentElement.value == ''){
				currentElement.style.background = 'rgb(255,233,233)';
				numbersValidity = false;
			} else{
				currentElement.style.background = 'white';
			}
		}
		if (!numbersValidity){
			throw 'Zip and Social Security values must be numbers.';
		}
		NUMERRORDIV.style.display = 'block';
		NUMERRORDIV.textContent = '';
	}

	catch(msg){
		NUMERRORDIV.style.display = 'block';
		NUMERRORDIV.textContent = msg;
		formValidity = false;
	}
}

//validate form
function validateForm(evt){
	if (evt.preventDefault){
		evt.preventDefault(); //prevent form from submitting
	} else{
		evt.returnValue = false;
	}

	formValidity = true;
	validateRequired();
	validateNumbers();

	if(formValidity){
		document.getElementsByTagName('form')[0].submit();
	}
}

//create event listeners
function createEventListeners(){
	const FORM = document.getElementsByTagName('form')[0];
	const SSNFIELDS = document.getElementsByClassName('ssn');

	FORM.addEventListener('submit', validateForm, false);
	for(let i = 0; i < SSNFIELDS.length; i++){
		SSNFIELDS[i].addEventListener('input', advanceSsn, false);
	}
}

//set up page
function setUpPage(){
	createEventListeners();
	generatePLaceholder();
}

//runs setup functions when page finishes loading
window.addEventListener('load', setUpPage, false);