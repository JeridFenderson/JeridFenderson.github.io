//JQuery
let currentPage = document.location.href;
let x = currentPage.lastIndexOf('/');
let y = currentPage.lastIndexOf('.');
currentPage = currentPage.substring((x + 1), y);
if (currentPage == "allhtml" || currentPage == "alljavascript" || currentPage == "alladobe"){
	currentPage = "portfolio"; 
}
$(document).ready(() => {
	$(`#${currentPage}`).addClass('active')

	$('#profilepic').on('click', ()=>{
		$('#profilepic').fadeOut(2000);
		$('#easterProfilepic').fadeIn(2000)
	})
	$('#easterProfilepic').on('mouseleave', ()=>{
		$('#easterProfilepic').fadeOut(2000)
		$('#profilepic').fadeIn(2000);
	})
});

function validateForm() {
  var name =  document.getElementById('fName').value;
  if (name == "") {
      document.querySelector('.status').textContent = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').textContent = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').textContent = "Email format invalid";
          return false;
      }
  }
  var message =  document.getElementById('questions').value;
  if (message == "") {
      document.querySelector('.status').textContent = "Message cannot be empty";
      return false;
  }
  document.querySelector('.status').textContent = "Sending...";
}


