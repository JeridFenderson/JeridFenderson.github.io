<!DOCTYPE html>
<html>
<head>
	<title>Validate Local Address</title>
</head>

<body>
	<h1>Validate Local Address</h1>
	<?php
		$email = array(
			"jsmith123@example.org",
			"john.smith.mail@example.org",
			"john.smith@example.org",
			"john.smith@example",
			"jsmith123@mail.example.org");

		foreach ($email as $email_address){
			echo "<p>The email address &ldquo;" . $email_address . "&rdquo; ";
			if (preg_match("/^(([A-Za-z]+\d+)|" . "([A-Za-z]+\.[A-Za-z]+))" . "@((mail\.)?)example\.org$/i", $email_address)==1){
				echo "is a valid email address.</p>";
			} else{
				echo "is not a valid email address.</p>";
			}
		}
	?>
</body>
</html>