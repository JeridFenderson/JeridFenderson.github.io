/*      JavaScript 6th Edition
      Chapter 9
      Hands-on Project 9-2

      Author: Jerid Fenderson
      Date:   09/11/2020

      Filename: userIndex.htm
*/

'use strict';

function processCookie(){
	document.cookie = `username=${document.getElementById('usernameinput').value}`;
}

function poplulateInfo(){
	if (document.cookie){
		let uname = document.cookie;
		uname = uname.substring(uname.lastIndexOf('=') + 1);
		document.getElementById('usernameinput').value = uname;
	}
}

function handleSubmit(evt){
	evt.preventDefault();
	processCookie();
	document.getElementsByTagName('form')[0].submit();
}

function createEventListener(){
	const LOGINFORM = document.getElementsByTagName('form')[0];
	LOGINFORM.addEventListener('submit', handleSubmit, false);
}

function setUpPage(){
	poplulateInfo();
	createEventListener();
}

window.addEventListener('load', setUpPage, false);