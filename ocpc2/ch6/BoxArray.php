<!DOCTYPE html>
<html>
<head>
	<title>Box Array</title>
</head>

<body>
	<h1>Box Array</h1>
	<?php
		$SmallBox = array(12, 10, 2.5);
		$MediumBox = array(30, 20, 4);
		$LargeBox = array(60, 40, 11.5);
		$BoxesOffered = array($SmallBox, $MediumBox, $LargeBox);
		$BoxName = array("Small Box", "Medium Box", "Large Box");

		echo "<table style='background-color:lightgrey' border='1' width='100%'>\n";

		for ($i = 0; $i <= 2; $i++){
			echo "<tr>\n";
			echo "<td width='5%' style='text-align:center'><span style='font-weight:bold'>Box Type:  </span>" . htmlentities($BoxName[$i]) . "<br/>";
			echo "<td width='5%' style='text-align:center'><span style='font-weight:bold'>Length: </span>" . htmlentities($BoxesOffered[$i][0]) . "<br/>";
			echo "<td width='5%' style='text-align:center'><span style='font-weight:bold'>Width: </span>" . htmlentities($BoxesOffered[$i][1]) . "<br/>";
			echo "<td width='5%' style='text-align:center'><span style='font-weight:bold'>Depth: </span>" . htmlentities($BoxesOffered[$i][2]) . "</td>\n</tr>\n";
		} echo "</table>\n"
	?>
</body>
</html>