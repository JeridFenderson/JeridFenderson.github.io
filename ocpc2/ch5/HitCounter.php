<!DOCTYPE html>
<html>
<head>
	<title>Hit Counter</title>
</head>

<body>
	<?php
		$CounterFile = "hitcount.txt";

		if (file_exists($CounterFile)){
			$hits = file_get_contents($CounterFile);
			$hits++;
		} else{
			$hits = 1;
		}

		echo "<h1>There have been $hits hits to this page. </h1>\n";
		if (file_put_contents($CounterFile, $hits)){
			echo "<p>The counter file has been updated</p>\n";
		}
	?>
</body>
</html>