<!DOCTYPE html>
<html>
<head>
	<title>Rounded Values</title>
</head>

<body>
	<form method="post">
		<label for="number">A decimal number:</label>
		<input type="text" id="number" name="number">
		<input type="submit">
	</form>
	<?php
		if ($_SERVER['REQUEST_METHOD'] == 'POST'){
			$fnumber = $_POST['number'];
			if (is_numeric($fnumber)){
				echo "<p>The rounded value of $fnumber is " . round($fnumber) . "</p>";
				echo "<p>The ceiling value of $fnumber is " . ceil($fnumber) . "</p>";
				echo "<p>The floor value of $fnumber is " . floor($fnumber) . "</p>";	
				if (floor($fnumber) == 42 || ceil($fnumber) == 42){
					echo "<p>You've also discovered the meaning of life!</p>";
				}		
			} else{
				echo "Please submit an actual number";
			}
		}
	?>
</body>
</html>