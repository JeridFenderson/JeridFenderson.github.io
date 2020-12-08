<!DOCTYPE html>
<html>
<head>
	<title>Odd Numbers</title>
</head>

<body>
	<?php
		$count = 0;
		while ($count <= 100){ //the arguement was initially set to > as opposed to <, instantly terminating the statement
			$numbers[] = $count;
			$count++; //personal preference
		}

		foreach ($numbers as $cur_num){ //the foreach loop was incorrectly nested within the while loop, causing it to run and fill out the array as each initiation occurred. Also, it used $count as opposed to the $numbers array for it's array
			echo "<p>$cur_num</p>";
		}
	?>
</body>
</html>