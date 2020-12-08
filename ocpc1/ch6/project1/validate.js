/*JavaScript 6th Edition
  Chapter 6
  Hands-on Project 6-1

  Author: Jerid Fenderson
  Date:   8/17/2020

  Filename: validate.js*/

'use strict';

let formValidity = true;

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
	FORM.addEventListener('submit', validateForm, false);
}

//runs setup functions when page finishes loading
window.addEventListener('load', createEventListeners, false);