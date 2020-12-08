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

		function validateNumber($data, $field_name){
			global $error_count;
			if(empty($data)){
				displayError($field_name, "This field is required");
			} else{
				$rounded_data = round($data);
				if((strlen($rounded_data)<1) || (strlen($rounded_data)>2)){
					displayError($field_name, "You shouldn't be making less than $1 an hour, or working less than 1 hour a week. Nor should you be making more than $99 an hour, or working more than 99 hours a week.");
				}
				if(preg_match("/^[0-9]+$/i", $rounded_data) == 0){
					displayError($field_name, "Numbers only");
				}
			}
			return($data);
		}

		$error_count = 0;
		$hourly_wage = validateNumber($_POST["wage"], "Hourly Wage");
		$hours_worked = validateNumber($_POST["hours"], "Hours Worked");

		if ($error_count > 0){
			echo "Please use the \"Back\" button to re-enter the data.<br/>\n";
		} else{
			if ($hours_worked <= 40){
				$gross_pay = $hours_worked * $hourly_wage;
			} else {
				$overtime = $hours_worked - 40;
				$gross_pay = ($hourly_wage * 40) + (1.5 * $hourly_wage * $overtime);
			}
			echo "Your gross pay should be $$gross_pay for $hours_worked hours worked, with a hourly wage of $$hourly_wage";
		}

	?>
</body>
</html>