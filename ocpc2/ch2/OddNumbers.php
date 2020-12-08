<!DOCTYPE html>
<html>
<head>
	<title>Odd Numbers</title>
</head>

<body>
	<?php
		$x = 0;
		while ($x <= 100){
			if (!($x%2 == 0)){
				echo "$x, ";
			}
			$x++;
		}
	?>
</body>
</html>