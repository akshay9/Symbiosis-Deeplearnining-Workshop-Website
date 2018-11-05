<?php
/*if(isset($_POST['submit']))*/
{
		$name=$_POST['name'];
		$mobile=$_POST['mobile'];
		$email=$_POST['email'];		
		$message=$_POST['message'];
		$subject = $_POST['subject'];
		$email=filter_var($email,FILTER_SANITIZE_EMAIL);
		$email=filter_var($email,FILTER_VALIDATE_EMAIL);
		$mail_to="symbiosisdlworkshop@symbiosisdlworkshop.com";
		$headers .= 'From: symbiosisdlworkshop@symbiosisdlworkshop.com'.PHP_EOL;
		$headers .= 'Cc: pooja.kamat@sitpune.edu.in'.PHP_EOL;
		$headers .= 'Bcc: avibarfa@gmail.com'.PHP_EOL;
		{
			$from="Contact Form - symbiosisdlworkshop.com\n";
			$name="Name : $name\n";
			$subject="Subject : $subject\n";
			$mobile="Mobile : $mobile\n";
			$email="Email : $email\n";
			$message=wordwrap($message,5000);
			$reply="-------------------message over-------------------------\n\nSource: symbiosisdlworkshop.com";

			$detail="\n$name\n$subject\n$email\n$mobile\nMessage :\n$message\n\n\n$reply";
			mail($mail_to,$from,$detail,$headers);
			echo "Messent Sent Successfully !!";
		}
} else {
	echo "Connectivity Issue Occured";
}
?>