<!DOCTYPE html>
<html>
<head>
	<title>Jumble Maker</title>
</head>

<body>
	<?php
		function displayError($field_name, $error_msg){
			global $error_count;
			echo "Error for \"$field_name\": $error_msg<br/>\n";
			$error_count++;
		}

		function validateWord($data, $field_name){
			global $error_count;
			if(empty($data)){
				displayError($field_name, "This field is required");
				$retval = "";
			} else{
				$retval = trim(stripslashes($data));
				if((strlen($retval)<4) || (strlen($retval)>7)){
					displayError($field_name, "Words must be at least four and at most seven letters long");
				}
				if(preg_match("/^[a-z]+$/i", $retval) == 0){
					displayError($field_name, "Words must be only letters");
				}
			}
			$retval = str_shuffle(strtoupper($retval));
			return($retval);
		}

		$error_count = 0;
		$words = array();

		for ($i = 1; $i <= 4; $i++){
			$words[] = validateWord($_POST["Word" . $i], "Word " . $i);
		}

		if ($error_count > 0){
			echo "Please use the \"Back\" button to re-enter the data.<br/>\n";
		} else{
			$word_num = 0;
			foreach($words as $word){
				echo "Word " . ++$word_num . ": $word<br/>\n";
			}
		}

	?>
</body>
</html>