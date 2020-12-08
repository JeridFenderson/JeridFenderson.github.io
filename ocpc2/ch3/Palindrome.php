<!DOCTYPE html>
<html>
<head>
	<title>Palindrome Confirmer</title>
</head>

<body>
	<h1>Palindrome Confirmer</h1>
	<form method="post">
		<label for="palindrome">Suspected Palandrome:</label>
		<input type="text" id="palindrome" name="palindrome">
		<input type="submit">
	</form>
	<?php
		if ($_SERVER["REQUEST_METHOD"] == "POST"){
			$potential_palindrome = $_POST["palindrome"];
			if ($potential_palindrome == ""){
				echo "Ahh. Silence, the best palindrome.";
			}else{
				$reversed_palindrome = strrev($potential_palindrome);
				if ($potential_palindrome == $reversed_palindrome){
					echo "$potential_palindrome. This word, this phrase...<p>What we have here is a perfect palindrome!</p>";
				} else{
					$chopped_palindrome = strtolower(str_replace( array( "'", " ", 
	    			"," , ";", ".", "!"), '', $potential_palindrome));
	    			$chopped_reversed_palindrome = strrev($chopped_palindrome);
	    			if ($chopped_palindrome == $chopped_reversed_palindrome){
	    				echo '"'.$potential_palindrome.'" is a standard palindrome. Creatively boring, I see you are.'; 
	    			} else{
	    				echo 'With the word or phrase "'.$potential_palindrome.'", we don\'t have any palindrome here. Check your spelling ability while I check my reading ability.';
	    			}
				}
			}
		}
	?>
</body>
</html>