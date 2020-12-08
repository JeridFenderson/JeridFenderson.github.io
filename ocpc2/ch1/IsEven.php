<!DOCTYPE html>
<html>
<head>
	<title>Is Even?</title>
</head>

<body>
	<form method="post">
		<label for="number">Any number:</label>
		<input type="text" id="number" name="number">
		<input type="submit">
	</form>
	<?php
		if ($_SERVER['REQUEST_METHOD'] == 'POST'){
			$user_number = $_POST['number'];
			if (is_numeric($user_number)){
				$rounded_number = round($user_number);
				if ($rounded_number%2 == 0){
					echo "<p>The number you sumbitted, $user_number, is even when rounded to its nearest whole number of $rounded_number</p>";
					if ($rounded_number == 42){
						echo "<p>You've also discovered the meaning of life!</p>";
					}		
				} else{
					echo "The number $user_number, which rounds to $rounded_number, is not even when rounded.";
				}		
			} else{
				echo "Please submit an actual number";
			}
		}
	?>
</body>
</html>