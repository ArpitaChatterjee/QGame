<?php
$Email = $_POST['Email'];
$Message = $_POST['Message'];

$conn = new mysqli('localhost','root','','test2');
if($conn->connect_error)
{
	die('connection failed :, .$conn->connect_error');

}
else{
	$stmt =$conn->prepare ("insert into form(Email,Message) values(?,?)");
	$stmt->bind_param("ss",$Email,$Message);
	$stmt->execute();
	echo "Message Sent";
	header('location:index2.html');
	$stmt->close();
	$conn->close();
}
?>
