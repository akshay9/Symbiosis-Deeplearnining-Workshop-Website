<?php
if(isset($_POST['submit']))
{
		$name=$_POST['name'];
		$mobile=$_POST['mobile'];
		$email=$_POST['email'];		
		$message=$_POST['message'];
		$email=filter_var($email,FILTER_SANITIZE_EMAIL);
		$email=filter_var($email,FILTER_VALIDATE_EMAIL);
		$mail_to="avinash.barfa@outlook.com";
		$headers = "CC: avibarfa98@gmail.com";
		{
			$from="From : $name\n";
			$subject="Message sent using your Contact Form from your website 'licmohanbarfa.in':\n\n";
			$mobile="Mobile : $mobile\n";
			$email="Email : $email\n";
			$message=wordwrap($message,5000);
			$reply="-------------------message over-------------------------\n\nPlease Get in touch With $name..\n\n\nSource:symbiosisdlworkshop.com\nHosted by-Avinash Barfa\nDelivered to- Mohan Barfa";
			$detail="$subject\n\n$from\n$email\n$mobile\n\nMessage :\n$message\n\n\n\n\n$reply";
			mail($mail_to,$from,$detail,$headers);
			echo "<br><br><center><h1>Soon, we will resolve your query.</h1></center>";
		}
} else {
	echo "Some Connectivity Issue";
}
?>