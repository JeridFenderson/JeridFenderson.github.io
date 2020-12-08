<!DOCTYPE html>
<html>
<head>
	<title>Password Strength Tester</title>
</head>

<body>
	<h1>Password Strength Tester</h1>
	<form method="post">
		<label for="password">Buff Password:</label>
		<input type="text" id="password" name="password">
		<input type="submit">
	</form>
	<?php
		if ($_SERVER["REQUEST_METHOD"] == "POST"){
			$password = $_POST["password"];
			$weights = "/^(?=.*[!@#$%^&*-])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z]).\S{8,16}\z/";
			if (preg_match($weights, $password)){
				echo "Your password hits the gym! Good job. Looking swoll.";
			} else{
				echo "That's a weak password bro. I'm going to need you to try again, but don't skip leg day this time.";
			}
	
		}
	?>
</body>
</html>