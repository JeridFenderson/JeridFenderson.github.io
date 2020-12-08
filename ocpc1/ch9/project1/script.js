/*JavaScript 6th Edition
Chapter 9
Hands-on Project 9-1

Author: Jerid Fenderson
Date:   09/11/2020

Filename: script.js
*/

'use strict';

function populateInfo(){
	if (location.search){
		let greeting = location.search;
		greeting = greeting.replace('+', ' ');
		greeting = greeting.substring(greeting.lastIndexOf('=') + 1)
		document.getElementById('greetingtext').textContent = decodeURIComponent(greeting);
	}
}

window.addEventListener('load', populateInfo, false);