<?php
if(isset($_POST['fName'])){
	$fname = $_POST['fName'];
	if ($fname === ''){
		echo "Name cannot be empty.";
		die();
	}
}

if(isset($_POST['lName'])){
	$lname = $_POST['lName'];
}

if(isset($_POST['email'])){
	$email = $_POST['email'];
	if ($email === ''){
		echo "Email cannot be empty.";
		die();
	} else {
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
			echo "Email format invalid.";
			die();
		}
	}
}

if(isset($_POST['phone'])){
	$phone = $_POST['phone'];
}

if(isset($_POST['questions'])){
	$message = $_POST['questions'];
	if ($message === ''){
		echo "Message cannot be empty.";
		die();
	}
}

$subject = "A Burning Question";
$content="From: $fName $lName \n Email: $email \n Phone: $phone \n Message: $message";
$recipient = "jrfenderson@gmail.com";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $content, $mailheader) or die("Error!");
echo "Email sent!";
?>